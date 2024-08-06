import {
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
  let packageName = getPackageName(lineItems);

  if (lineItems.some((li) => TEST_MODE_4_SESSION === li.price.product)) {
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
        TEST_MODE_12_SESSION === li.price.product ||
        TEST_MODE_12_SESSION_LITE === li.price.product,
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

  await brevoSendTransactionalEmail(customer_email, customer_name, ``, 2, {
    packageName,
    links: calendlyUrls.map((c) => `<li>${c}</li>`).join(""),
  });

  return calendlyUrls;
}

const getPackageName = (lineItems: StripeLineItem[]) => {
  if (lineItems.some((li) => TEST_MODE_4_SESSION === li.price.product)) {
    return "4-Session (60 mins)";
  } else if (
    lineItems.some((li) => TEST_MODE_12_SESSION === li.price.product)
  ) {
    return "12-Session (60 mins)";
  } else if (
    lineItems.some((li) => TEST_MODE_12_SESSION_LITE === li.price.product)
  ) {
    return "12-Session Lite (30 mins)";
  } else {
    throw new Error("Unexpected product id, does not have a package name");
  }
};
