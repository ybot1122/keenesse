import stripe from "stripe";
import { NextResponse, type NextRequest } from "next/server";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";
const stripeApiSecret = process.env.STRIPE_API_KEY ?? "";

export async function POST(request: NextRequest) {
  const stripe_api = new stripe(stripeApiSecret);

  let event: any = request.body;

  const raw_body_str = await request.text();

  if (!event) {
    return new NextResponse("Empty body", {
      status: 400,
    });
  }

  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers.get("stripe-signature") ?? "";
    try {
      event = stripe_api.webhooks.constructEvent(
        raw_body_str,
        signature,
        endpointSecret,
      );
    } catch (err: any) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return new NextResponse("Webhook signature verification failed", {
        status: 400,
      });
    }
  }

  // Handle the event
  switch (event.type) {
    case "customer.created":
      const customer = event.data.object;
      break;
    case "invoice.created":
      const invoice = event.data.object;
      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  return new NextResponse("hi");
}
