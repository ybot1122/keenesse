"use server";

import * as Brevo from "@getbrevo/brevo";
import validateContactForm from "./validateContactForm";

export type NewsletterSignupFormState = {
  status?: "fail" | "success";
  message?:
    | "Invalid email"
    | "Server error"
    | "You are already signed up!"
    | "Sorry, something went wrong!";
};

export async function newsletterSignupAction(
  currentState: NewsletterSignupFormState,
  formData: FormData,
): Promise<NewsletterSignupFormState> {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    return {
      status: "fail",
      message: "Server error",
    };
  }

  const validation = validateContactForm(formData);

  if (validation.status === "Invalid") {
    return {
      status: "fail",
      message: "Invalid email",
    };
  }

  try {
    const apiInstance = new Brevo.ContactsApi();
    apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, BREVO_API_KEY);
    const createContact = new Brevo.CreateContact();

    createContact.email = validation.sanitized?.email;
    createContact.updateEnabled = true;
    createContact.listIds = [4];
    if (validation.sanitized?.firstName && validation.sanitized.lastName) {
      createContact.attributes = {
        FIRSTNAME: validation.sanitized.firstName,
        LASTNAME: validation.sanitized.lastName,
      };
    }

    const response = await apiInstance.createContact(createContact);

    if (response.response.statusCode === 201) {
      return {
        status: "success",
      };
    }
  } catch (e: unknown) {
    const brevoErrorResponse: any = e;

    if (
      brevoErrorResponse.body &&
      brevoErrorResponse.body.code === "duplicate_parameter"
    ) {
      console.error(brevoErrorResponse.body);
      return {
        status: "success",
        message: "You are already signed up!",
      };
    }

    console.error(e);
  }

  return {
    status: "fail",
    message: "Sorry, something went wrong!",
  };
}
