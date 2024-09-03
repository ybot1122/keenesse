import {
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

/**
 * Given a Stripe checkout_session_id and Stripe line items, it will either return
 * a previously stored Cal URL if it exists in Redis KV or generate a new
 * one based on the subscription purchased
 * @param lineItems Stripe Invoice Line Items
 * @param checkout_session_id Stripe checkout session ID
 * @param customer_email
 * @param customer_name
 * @returns Calendly URL
 */
export default async function generateCalLinkAndSendEmail(
  lineItems: StripeLineItem[],
  checkout_session_id: string,
  customer_email: string,
  customer_name: string,
): Promise<string[]> {
  const calendlyUrlFromKV = await kv.get<string>(checkout_session_id);

  if (calendlyUrlFromKV) {
    return calendlyUrlFromKV as any as string[];
  }

  let calendlyUrls: string[] = [];
  const { packageName, emailTemplateId } =
    getPackageNameAndEmailTemplateId(lineItems);

  if (
    lineItems.some(
      (li) =>
        TEST_MODE_4_SESSION === li.price.product ||
        LIVE_MODE_4_SESSION === li.price.product,
    )
  ) {
    // TODO generate 4 session 60 min
  } else if (
    lineItems.some(
      (li) =>
        LIVE_MODE_12_SESSION === li.price.product ||
        TEST_MODE_12_SESSION === li.price.product,
    )
  ) {
    // TODO generate 12 session 60min
  } else if (
    lineItems.some(
      (li) =>
        LIVE_MODE_12_SESSION_LITE === li.price.product ||
        TEST_MODE_12_SESSION_LITE === li.price.product,
    )
  ) {
    // TODO generate 12 session 30min
  } else {
    throw new Error(
      "tried to generate Cal links but did not recognize product id",
    );
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
      ...links,
    },
  );

  return calendlyUrls;
}

export const getPackageNameAndEmailTemplateId = (
  lineItems: StripeLineItem[],
): { packageName: string; emailTemplateId: 2 | 4 } => {
  if (
    lineItems.some(
      (li) =>
        TEST_MODE_4_SESSION === li.price.product ||
        LIVE_MODE_4_SESSION === li.price.product,
    )
  ) {
    return {
      packageName: "4-Session (60 mins)",
      emailTemplateId: 2,
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
    };
  } else {
    throw new Error("Unexpected product id, does not have a package name");
  }
};
