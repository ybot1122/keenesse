"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import validateContactForm from "./validateContactForm";
import { ContactFormState } from "./contactFormAction";
import ContactForm from "./ContactForm";

const action = async (
  currentState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const validation = validateContactForm(formData);

  console.log(validation);

  if (validation.status === "Invalid") {
    return {
      status: "fail",
      message: validation.error,
    };
  }

  return {
    status: "success",
  };
};

export default function Contact() {
  const [formState, formAction] = useFormState<ContactFormState>(
    //@ts-ignore
    action,
    {},
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="col-span-1 pr-10">
          <h3 className="text-blue text-4xl">Let&apos;s Talk</h3>
          <p className="py-10 text-xl">
            Feel free to reach out here or if you prefer, drop an email. If
            you&apos;re interested in 1:1 coaching, you can also go ahead and{" "}
            <Link href="/appointments" className="underline text-blue">
              schedule your free consultation.
            </Link>
          </p>
          <p className="pb-10 text-xl">hello@kenesse.com</p>
        </div>

        <div className="col-span-1">
          {formState.status === "success" ? (
            <p>Thank you for the message, I&apos;ll get back to you shortly!</p>
          ) : (
            <form className="grid grid-cols-2 gap-2" action={formAction}>
              <ContactForm message={formState.message} />
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
