import { NextResponse } from "next/server";

const calendlyPersonalAccessToken = process.env.CALENDLY_PAT ?? "";

const productIds = ["prod_QSTWXLF2x2W86n"];

type StripeInvoice = {
  lines: {
    data: {
      customer_name: string;
      customer_email: string;
      plan: {
        product: string;
      };
    }[];
  };
};

export default async function handleInvoicePaymentSucceeded(
  invoice: StripeInvoice,
) {
  if (!invoice.lines.data.some((d) => productIds.includes(d.plan?.product))) {
    return new NextResponse(
      JSON.stringify({
        message: "Your invoice does not require a one time schedule URL",
      }),
      {
        status: 200,
      },
    );
  }

  let calendlyUrl = "";

  // Generate One-Time Calendly URL
  try {
    const calendlyResponse = await fetch(
      "https://api.calendly.com/scheduling_links",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${calendlyPersonalAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          max_event_count: 1,
          owner:
            "https://api.calendly.com/event_types/27eb0c2c-469c-4403-9348-587a9656f278",
          owner_type: "EventType",
        }),
      },
    );

    const data = await calendlyResponse.json();

    calendlyUrl = data.resource.booking_url;
  } catch (e: any) {
    console.log(e);
    console.log("Failed to generate Calendly URL. This is bad.");
    throw new Error("Failed to generate Calendly URL.");
  }

  return new NextResponse(
    JSON.stringify({
      message: "One time schedule Calendly url created",
      calendlyUrl,
    }),
    {
      status: 200,
    },
  );
}
