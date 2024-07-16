import { STRIPE_SUBSCRIPTION_PRODUCT_IDS } from "@/constants/STRIPE_SUBSCRIPTION_PRODUCT_IDS";
import stripe from "stripe";
const stripeApiSecret = process.env.STRIPE_API_KEY ?? "";

type CheckoutSession = {
  data: {
    id: string;
    price: {
      id: string;
      product: string;
    };
  }[];
};

export default async function isValidStripeCheckoutSession(
  checkoutSessionId: string,
) {
  const stripe_api = new stripe(stripeApiSecret);

  try {
    const lineItems =
      await stripe_api.checkout.sessions.listLineItems(checkoutSessionId);

    console.log(lineItems);
    console.log(lineItems.data[0].price);

    if (
      lineItems.data.some(
        (d) =>
          d.price &&
          STRIPE_SUBSCRIPTION_PRODUCT_IDS.includes(d.price.product as string),
      )
    ) {
      return true;
    }
  } catch (e: any) {
    console.log("Error retrieving strip checkout session", e);
    return false;
  }

  return false;
}
