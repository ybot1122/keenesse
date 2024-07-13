"use server";

import * as Brevo from "@getbrevo/brevo";
import validateContactForm from "./validateContactForm";
import { newsletterSignupAction } from "./newsletterSignupAction";

export type ContactFormState = {
  status?: "success" | "fail";
  message?: "Invalid Email Address" | "Missing Data" | "Something went wrong";
};

const contactFormAction = async (
  currentState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    return {
      status: "fail",
      message: "Something went wrong",
    };
  }

  const validation = validateContactForm(formData);

  if (validation.status === "Invalid") {
    return {
      status: "fail",
      message: "Missing Data",
    };
  }

  // Add user to mailing list
  await newsletterSignupAction({}, formData);

  // Send transactional email
  try {
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      BREVO_API_KEY,
    );
    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.to = [{ email: "hello@keenesse.com", name: "Keenesse" }];
    sendSmtpEmail.replyTo = {
      name:
        validation.sanitized?.firstName + " " + validation.sanitized?.lastName,
      email: validation.sanitized?.email ?? "",
    };
    sendSmtpEmail.templateId = 1;
    sendSmtpEmail.params = {
      name:
        validation.sanitized?.firstName + " " + validation.sanitized?.lastName,
      email: validation.sanitized?.email,
      message: validation.sanitized?.message,
      topics: validation.sanitized?.topics.join(", "),
    };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    if (response.response.statusCode === 201) {
      return {
        status: "success",
      };
    }
  } catch (e) {
    console.error(e);
  }

  return {
    status: "fail",
    message: "Something went wrong",
  };
};

export { contactFormAction };
