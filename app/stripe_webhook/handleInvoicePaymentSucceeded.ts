import { NextResponse } from "next/server";
import * as Brevo from "@getbrevo/brevo";

const calendlyPersonalAccessToken = process.env.CALENDLY_PAT ?? "";
const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

const productIds = ["prod_QSTWXLF2x2W86n"];

type StripeInvoice = {
  data: {
    customer_name: string;
    customer_email: string;
    lines: {
      data: {
        plan: {
          product: string;
        };
      }[];
    };
  };
};

export default async function handleInvoicePaymentSucceeded(
  invoice: StripeInvoice,
) {
  if (
    !invoice.data.lines.data.some((d) => productIds.includes(d.plan?.product))
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

  // Send Email
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
    sendSmtpEmail.to = [
      { email: invoice.data.customer_email, name: invoice.data.customer_name },
    ];
    sendSmtpEmail.replyTo = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.templateId = 1;
    sendSmtpEmail.params = {
      name: invoice.data.customer_name,
      email: invoice.data.customer_email,
      message: `Here is your one time signup URL: ${calendlyUrl}`,
    };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    if (response.response.statusCode === 201) {
      return new NextResponse(
        JSON.stringify({
          message: "One time schedule Calendly url created",
          calendlyUrl,
        }),
        {
          status: 200,
        },
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Sending email failed",
        }),
        {
          status: 500,
        },
      );
    }
  } catch (e) {
    console.error(e);
    throw new Error(
      "Failed to send Transactional Email containing the Calendly URL.",
    );
  }
}
