import {
  PRE_PAID_30MINS_EVENT_TYPE,
  PRE_PAID_60MINS_EVENT_TYPE,
} from "@/constants/CALENDLY_EVENT_TYPES";
import {
  MONTHLY_ACCOUNTABILITY_PRODUCT_ID,
  TEST_MODE_4_SESSION,
  TEST_MODE_DAILY_ACCOUNTABILITY_PRODUCT_ID,
  TESTING_LIVE_DAILY_CHARGE_PRODUCT_ID,
  WEEKLY_ACCOUNTABILITY_PRODUCT_ID,
} from "@/constants/STRIPE_SUBSCRIPTION_PRODUCT_IDS";
import { StripeLineItem } from "@/constants/StripeLineItem";

const calendlyPersonalAccessToken = process.env.CALENDLY_PAT ?? "";

/**
 * Given Stripe Invoice Line Items, generate the correct Calendly URL
 * (usually either a 60min or 30min session)
 * @param lineItems
 * @returns CalendlyURL
 */
export default async function generateOneTimeCalendlyUrl(
  lineItems: StripeLineItem[],
) {
  let calendlyUrl = "";
  let calendlyEventType = "";

  if (
    lineItems.some(
      (li) =>
        WEEKLY_ACCOUNTABILITY_PRODUCT_ID === li.price.product ||
        TEST_MODE_DAILY_ACCOUNTABILITY_PRODUCT_ID === li.price.product ||
        TESTING_LIVE_DAILY_CHARGE_PRODUCT_ID === li.price.product,
    )
  ) {
    calendlyEventType = PRE_PAID_30MINS_EVENT_TYPE;
  } else if (
    lineItems.some(
      (li) =>
        MONTHLY_ACCOUNTABILITY_PRODUCT_ID === li.price.product ||
        TEST_MODE_4_SESSION === li.price.product,
    )
  ) {
    calendlyEventType = PRE_PAID_60MINS_EVENT_TYPE;
  } else {
    throw new Error(
      "Tried to create a Calendly URL but did not have a valid subscription",
    );
  }

  try {
    calendlyUrl = await getCalendlyUrl(calendlyEventType);
  } catch (e: any) {
    console.log(e);
    throw new Error(
      "Failed to generate Calendly URL when we should have one for a paying subscriber",
    );
  }

  if (!calendlyUrl) {
    throw new Error(
      "Failed to generate Calendly URL when we should have one for a paying subscriber",
    );
  }

  return calendlyUrl;
}

const getCalendlyUrl = async (calendlyEventType: string) => {
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
        owner: calendlyEventType,
        owner_type: "EventType",
      }),
    },
  );

  const data = await calendlyResponse.json();

  const calendlyUrl = data.resource.booking_url;

  return calendlyUrl;
};
