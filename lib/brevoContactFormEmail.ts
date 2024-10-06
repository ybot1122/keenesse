/**
 * Used for sending email from the contact form to hello@keenesse.com
 */

import * as Brevo from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

export default async function brevoContactFormEmail(
  customer_email: string,
  customer_name: string,
  message: string,
  templateId: 1,
  params: undefined | {},
) {
  // Send Email
  try {
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      BREVO_API_KEY,
    );
    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    const name =
      customer_name && customer_name.length > 0
        ? customer_name
        : "Keenesse Client";

    sendSmtpEmail.sender = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.to = [{ email: "hello@keenesse.com", name: "Keenesse" }];
    sendSmtpEmail.replyTo = {
      name: name,
      email: customer_email,
    };
    sendSmtpEmail.templateId = templateId;
    sendSmtpEmail.params = {
      name,
      email: customer_email,
      message: message,
      ...params,
    };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    if (response.response.statusCode === 201) {
      return true;
    } else {
      throw new Error("Failed to send Transactional Email");
    }
  } catch (e) {
    console.error("Failed to send Transactional Email" + e);
    throw new Error("Failed to send Transactional Email");
  }
}
