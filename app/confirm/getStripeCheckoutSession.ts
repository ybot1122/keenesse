import stripe from "stripe";
const stripeApiSecret = process.env.STRIPE_API_KEY ?? "";

export default async function getStripeCheckoutSession(
  checkoutSessionId: string,
) {
  const stripe_api = new stripe(stripeApiSecret);

  const lineItems =
    await stripe_api.checkout.sessions.listLineItems(checkoutSessionId);

  console.log(lineItems);
}
