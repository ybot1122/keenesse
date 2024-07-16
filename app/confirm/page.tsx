"use server";

import { redirect } from "next/navigation";
import isValidStripeCheckoutSession from "./getStripeCheckoutSession";
import generateLinkAndSendEmail from "./generateLinkAndSendEmail";
import Link from "next/link";

export default async function Confirm({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const checkoutSessionId = searchParams["checkout_session_id"];

  if (!checkoutSessionId) {
    redirect("/");
  }

  const customerDetails = await isValidStripeCheckoutSession(checkoutSessionId);

  if (!customerDetails) {
    redirect("/");
  }

  const calendlyUrl = await generateLinkAndSendEmail(
    checkoutSessionId,
    customerDetails.customer_email,
    customerDetails.customer_name,
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue mb-5">
            <span className="font-bold">
              Thank You
              <br />
            </span>{" "}
            for subscribing to a weekly accountability check-in
          </h1>
          <p className="text-2xl text-center mb-5">
            To schedule your first session, click here:{" "}
            <Link href={calendlyUrl} className="underline">
              {calendlyUrl}
            </Link>
          </p>
          <p className="text-2xl text-center">
            Every week you stay subscribed, you will receive an email with a new
            Calendly link to schedule your session.
          </p>
        </div>
      </div>
    </main>
  );
}
