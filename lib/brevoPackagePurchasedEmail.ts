import { Coach } from "@/constants/Coaches";
import * as Brevo from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

export default async function brevoPackagePurchasedEmail(
  customer_email: string,
  customer_name: string,
  templateId: 2 | 4,
  params: {},
  coachName: Coach,
) {
  let coachEmail;
  switch (coachName) {
    case "Daisy":
      coachEmail = "hello@keenesse.com";
      break;
    case "Dong":
      coachEmail = "dong@keenesse.com";
      break;
    default:
      throw new Error(
        "Tried to send a package purchased email without a coach name",
      );
  }

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
    sendSmtpEmail.to = [{ email: customer_email, name }];
    sendSmtpEmail.cc = [{ email: coachEmail, name: coachName }];
    sendSmtpEmail.replyTo = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.templateId = templateId;
    sendSmtpEmail.params = {
      name,
      email: customer_email,
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
