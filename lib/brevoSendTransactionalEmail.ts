import * as Brevo from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

export default async function brevoSendTransactionalEmail(
  customer_email: string,
  customer_name: string,
  message: string,
) {
  // Send Email
  try {
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      BREVO_API_KEY,
    );
    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.to = [{ email: customer_email, name: customer_name }];
    sendSmtpEmail.replyTo = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.templateId = 1;
    sendSmtpEmail.params = {
      name: customer_name,
      email: customer_email,
      message: message,
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
