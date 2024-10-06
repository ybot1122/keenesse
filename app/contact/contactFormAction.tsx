"use server";

import validateContactForm from "./validateContactForm";
import { newsletterSignupAction } from "./newsletterSignupAction";
import brevoContactFormEmail from "@/lib/brevoContactFormEmail";

export type ContactFormState = {
  status?: "success" | "fail";
  message?: "Invalid Email Address" | "Missing Data" | "Something went wrong";
};

const contactFormAction = async (
  currentState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const validation = validateContactForm(formData);

  if (validation.status === "Invalid" || !validation.sanitized?.email) {
    return {
      status: "fail",
      message: "Missing Data",
    };
  }

  // Add user to mailing list
  await newsletterSignupAction({}, formData);

  // Send transactional email
  await brevoContactFormEmail(
    validation.sanitized?.email,
    validation.sanitized?.firstName + " " + validation.sanitized?.lastName,
    validation.sanitized?.message,
    1,
    { topics: validation.sanitized?.topics.join(", ") },
  );

  return {
    status: "success",
  };
};

export { contactFormAction };
