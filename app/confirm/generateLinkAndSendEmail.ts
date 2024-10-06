import { Coach } from "@/constants/Coaches";
import {
  DONG_12_SESSION,
  DONG_12_SESSION_LITE,
  DONG_4_SESSION,
  LIVE_MODE_12_SESSION,
  LIVE_MODE_12_SESSION_LITE,
  LIVE_MODE_4_SESSION,
  TEST_MODE_12_SESSION,
  TEST_MODE_12_SESSION_LITE,
  TEST_MODE_4_SESSION,
} from "@/constants/STRIPE_SUBSCRIPTION_PRODUCT_IDS";
import { StripeLineItem } from "@/constants/StripeLineItem";
import brevoSendTransactionalEmail from "@/lib/brevoSendTransactionalEmail";
import generateOneTimeCalendlyUrl from "@/lib/generateOneTimeCalendlyUrl";
import { kv } from "@vercel/kv";
import { contactFormAction } from "../contact/contactFormAction";
import brevoContactFormEmail from "@/lib/brevoContactFormEmail";

/**
 * Given a Stripe checkout_session_id and Stripe line items, it will either return
 * a previously stored Calendly URL if it exists in Redis KV or generate a new
 * one based on the subscription purchased
 * @param lineItems Stripe Invoice Line Items
 * @param checkout_session_id Stripe checkout session ID
 * @param customer_email
 * @param customer_name
 * @returns Calendly URL
 */
export default async function generateLinkAndSendEmail(
  lineItems: StripeLineItem[],
  checkout_session_id: string,
  customer_email: string,
  customer_name: string,
): Promise<string[]> {
  const calendlyUrlFromKV = await kv.get<string>(checkout_session_id);

  if (calendlyUrlFromKV) {
    return calendlyUrlFromKV as any as string[];
  }

  let calendlyUrls = [];
  const { packageName, emailTemplateId, coachName } =
    getPackageNameAndEmailTemplateId(lineItems);

  if (
    lineItems.some(
      (li) =>
        TEST_MODE_4_SESSION === li.price.product ||
        LIVE_MODE_4_SESSION === li.price.product ||
        DONG_4_SESSION === li.price.product,
    )
  ) {
    const promises = [
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
    ];

    calendlyUrls = await Promise.all(promises);
  } else if (
    lineItems.some(
      (li) =>
        LIVE_MODE_12_SESSION === li.price.product ||
        LIVE_MODE_12_SESSION_LITE === li.price.product ||
        TEST_MODE_12_SESSION === li.price.product ||
        TEST_MODE_12_SESSION_LITE === li.price.product ||
        DONG_12_SESSION === li.price.product ||
        DONG_12_SESSION_LITE === li.price.product,
    )
  ) {
    const promises = [
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
      generateOneTimeCalendlyUrl(lineItems),
    ];

    calendlyUrls = await Promise.all(promises);
  } else {
    calendlyUrls.push(await generateOneTimeCalendlyUrl(lineItems));
  }

  kv.set(checkout_session_id, calendlyUrls);

  const links: Record<string, string> = {};
  calendlyUrls.forEach((c, ind) => {
    links[`link${ind + 1}`] = c;
  });

  await brevoSendTransactionalEmail(
    customer_email,
    customer_name,
    ``,
    emailTemplateId,
    {
      packageName,
      coachName,
      ...links,
    },
  );

  let coachEmail;

  switch (coachName) {
    case "Daisy":
      coachEmail = "hello@keenesee.com";
      break;
    case "Dong":
      coachEmail = "dong@keenesse.com";
      break;
    default:
      break;
  }

  if (coachEmail) {
    await brevoSendTransactionalEmail(coachEmail, coachName, ``, 5, {
      coachName: coachName,
      customerName: customer_name,
      customerEmail: customer_email,
      packageName,
    });
  }

  return calendlyUrls;
}

export const getPackageNameAndEmailTemplateId = (
  lineItems: StripeLineItem[],
): {
  packageName: string;
  emailTemplateId: 2 | 4;
  coachName: Coach;
} => {
  if (lineItems.some((li) => DONG_4_SESSION === li.price.product)) {
    return {
      packageName: "4-Session (60 mins)",
      emailTemplateId: 2,
      coachName: "Dong",
    };
  } else if (lineItems.some((li) => DONG_12_SESSION === li.price.product)) {
    return {
      packageName: "12-Session (60 mins)",
      emailTemplateId: 4,
      coachName: "Dong",
    };
  } else if (
    lineItems.some((li) => DONG_12_SESSION_LITE === li.price.product)
  ) {
    return {
      packageName: "12-Session Lite (30 mins)",
      emailTemplateId: 4,
      coachName: "Dong",
    };
  } else if (
    lineItems.some(
      (li) =>
        TEST_MODE_4_SESSION === li.price.product ||
        LIVE_MODE_4_SESSION === li.price.product,
    )
  ) {
    return {
      packageName: "4-Session (60 mins)",
      emailTemplateId: 2,
      coachName: "Daisy",
    };
  } else if (
    lineItems.some(
      (li) =>
        TEST_MODE_12_SESSION === li.price.product ||
        LIVE_MODE_12_SESSION === li.price.product,
    )
  ) {
    return {
      packageName: "12-Session (60 mins)",
      emailTemplateId: 4,
      coachName: "Daisy",
    };
  } else if (
    lineItems.some(
      (li) =>
        TEST_MODE_12_SESSION_LITE === li.price.product ||
        LIVE_MODE_12_SESSION_LITE === li.price.product,
    )
  ) {
    return {
      packageName: "12-Session Lite (30 mins)",
      emailTemplateId: 4,
      coachName: "Daisy",
    };
  } else {
    throw new Error("Unexpected product id, does not have a package name");
  }
};
