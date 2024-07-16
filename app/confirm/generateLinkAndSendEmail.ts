import brevoSendTransactionalEmail from "@/lib/brevoSendTransactionalEmail";
import generateOneTimeCalendlyUrl from "@/lib/generateOneTimeCalendlyUrl";
import { kv } from "@vercel/kv";

export default async function generateLinkAndSendEmail(
  checkout_session_id: string,
  customer_email: string,
  customer_name: string,
) {
  let calendlyUrl = await kv.get<string>(checkout_session_id);

  if (!calendlyUrl) {
    calendlyUrl = await generateOneTimeCalendlyUrl();
    kv.set(checkout_session_id, calendlyUrl);
  }

  await brevoSendTransactionalEmail(
    customer_email,
    customer_name,
    `Here is your one time signup URL: ${calendlyUrl}`,
  );

  return calendlyUrl;
}
