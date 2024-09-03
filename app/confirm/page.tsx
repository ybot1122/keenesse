"use server";

import { redirect } from "next/navigation";
import isValidStripeCheckoutSession from "./getStripeCheckoutSession";
import generateLinkAndSendEmail, {
  getPackageNameAndEmailTemplateId,
} from "./generateLinkAndSendEmail";
import Link from "next/link";
import { TEST_MODE_4_SESSION } from "@/constants/STRIPE_SUBSCRIPTION_PRODUCT_IDS";
import generateCalLinkAndSendEmail from "./generateCalLinkAndSendEmail";

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

  const { packageName } = getPackageNameAndEmailTemplateId(
    customerDetails.lineItems,
  );

  // START NEW CAL FLOW HERE //

  const calLink = await generateCalLinkAndSendEmail(
    customerDetails.lineItems,
    checkoutSessionId,
    customerDetails.customer_email,
    customerDetails.customer_name,
  );

  const calendlyUrls = await generateLinkAndSendEmail(
    customerDetails.lineItems,
    checkoutSessionId,
    customerDetails.customer_email,
    customerDetails.customer_name,
  );

  // redirect(calendlyUrl);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue mb-5">
            <span className="font-bold">
              Thank You {customerDetails.customer_name}
            </span>
          </h1>
          <p className="text-center text-2xl mb-5">
            We are excited to support you with our {packageName} package.
          </p>
          <p className="text-center text-2xl mb-5">
            We have sent the links to schedule all your sessions to your email:{" "}
            <span className="underline">{customerDetails.customer_email}</span>.
          </p>
          <p className="text-center text-2xl mb-5">
            <Link href={calendlyUrls[0]} className="underline">
              Click here to schedule first session!
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
