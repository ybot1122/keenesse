import brevoSendTransactionalEmail from "@/lib/brevoSendTransactionalEmail";
import generateOneTimeCalendlyUrl from "@/lib/generateOneTimeCalendlyUrl";

export default async function generateLinkAndSendEmail(
  customer_email: string,
  customer_name: string,
) {
  const calendlyUrl = await generateOneTimeCalendlyUrl();

  await brevoSendTransactionalEmail(
    customer_email,
    customer_name,
    `Here is your one time signup URL: ${calendlyUrl}`,
  );
}
