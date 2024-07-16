import { NextResponse } from "next/server";
import { STRIPE_SUBSCRIPTION_PRODUCT_IDS } from "@/constants/STRIPE_SUBSCRIPTION_PRODUCT_IDS";
import generateOneTimeCalendlyUrl from "@/lib/generateOneTimeCalendlyUrl";
import brevoSendTransactionalEmail from "@/lib/brevoSendTransactionalEmail";

type StripeInvoice = {
  customer_name: string;
  customer_email: string;
  billing_reason: "subscription_cycle" | "subscription_create";
  lines: {
    data: {
      plan: {
        product: string;
      };
    }[];
  };
};

export default async function handleInvoicePaymentSucceeded(
  invoice: StripeInvoice,
) {
  if (
    invoice.billing_reason === "subscription_create" ||
    !invoice.lines.data.some((d) =>
      STRIPE_SUBSCRIPTION_PRODUCT_IDS.includes(d.plan?.product),
    )
  ) {
    return new NextResponse(
      JSON.stringify({
        message: "Your invoice does not require a one time schedule URL",
      }),
      {
        status: 200,
      },
    );
  }

  if (!invoice.customer_email || !invoice.customer_name) {
    return new NextResponse(
      JSON.stringify({
        message: "This invoice does not have the customer email and name",
      }),
      {
        status: 400,
      },
    );
  }

  let calendlyUrl = await generateOneTimeCalendlyUrl();

  await brevoSendTransactionalEmail(
    invoice.customer_email,
    invoice.customer_name,
    `Here is your one time signup URL: ${calendlyUrl}`,
  );

  return new NextResponse(
    JSON.stringify({
      message: "One time schedule Calendly url created",
    }),
    {
      status: 200,
    },
  );
}
