import { STRIPE_SUBSCRIPTION_PRODUCT_IDS } from "@/constants/STRIPE_SUBSCRIPTION_PRODUCT_IDS";
import { StripeLineItem } from "@/constants/StripeLineItem";
import stripe from "stripe";
const stripeApiSecret = process.env.STRIPE_API_KEY ?? "";

export default async function isValidStripeCheckoutSession(
  checkoutSessionId: string,
): Promise<{
  customer_name: string;
  customer_email: string;
  lineItems: StripeLineItem[];
}> {
  const stripe_api = new stripe(stripeApiSecret);

  try {
    const lineItems = (
      await stripe_api.checkout.sessions.listLineItems(checkoutSessionId)
    ).data as any;
    const session =
      await stripe_api.checkout.sessions.retrieve(checkoutSessionId);

    const customer_name = session.customer_details?.name ?? "";
    const customer_email =
      session.customer_details?.email ?? session.customer_email;

    if (!customer_email) {
      console.log("No customer email on Stripe checkout session");
      throw new Error("No customer email on Stripe checkout session");
    }

    if (
      lineItems.some(
        (d: StripeLineItem) =>
          d.price &&
          STRIPE_SUBSCRIPTION_PRODUCT_IDS.includes(d.price.product as string),
      )
    ) {
      return {
        customer_name,
        customer_email,
        lineItems,
      };
    } else {
      throw new Error("Stripe product does not require confirm page");
    }
  } catch (e: any) {
    console.log("Error retrieving stripe checkout session", e);
    throw new Error("Error retrieving stripe checkout session");
  }

  throw new Error(
    "Something unexpected while retrieving stripe checkout session",
  );
}
