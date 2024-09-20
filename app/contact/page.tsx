"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import validateContactForm from "./validateContactForm";
import { ContactFormState, contactFormAction } from "./contactFormAction";
import ContactForm from "./ContactForm";

const action = async (
  currentState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const validation = validateContactForm(formData);

  if (validation.status === "Invalid") {
    return {
      status: "fail",
      message: validation.error,
    };
  }

  return await contactFormAction(currentState, formData);
};

export default function Contact() {
  const [formState, formAction] = useFormState<ContactFormState>(
    //@ts-ignore
    action,
    {},
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white mx-5 mb-10 md:m-10 p-5 md:p-10 max-w-[1280px]">
        <div className="col-span-1 pr-10">
          <h3 className="text-blue text-4xl text-center">Let&apos;s Talk!</h3>
          <p className="py-10 text-xl">
            Feel free to drop an email to{" "}
            <span className="font-bold">hello@keenesse.com</span>
          </p>

          <p className="pb-10 text-xl">
            You can also connect with us on{" "}
            <Link
              className="font-bold underline"
              href="https://www.linkedin.com/company/keenesse/"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </p>

          <p className="pb-10 text-xl">
            If you&apos;re interested in 1:1 coaching, you can also go ahead and{" "}
            <Link href="/appointments" className="underline text-blue">
              schedule your free consultation.
            </Link>
          </p>
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

/*

        <div className="col-span-1">
          </div>
*/
