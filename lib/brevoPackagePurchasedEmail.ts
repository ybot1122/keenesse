/**
 * Used to inform the coach when someone has purchased a package.
 */

import { Coach } from "@/constants/Coaches";
import * as Brevo from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

export default async function brevoPackagePurchasedEmail(
  coachName: Coach,
  customerName: string,
  customerEmail: string,
  packageName: string,
) {
  let coachEmail;
  let name;

  switch (coachName) {
    case "Daisy":
      name = "Keenesse";
      coachEmail = "hello@keenesee.com";
      break;
    case "Dong":
      name = "Dong";
      coachEmail = "dong@keenesse.com";
      break;
    default:
      return;
  }

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
    sendSmtpEmail.to = [
      {
        name: coachName,
        email: coachEmail,
      },
    ];
    sendSmtpEmail.replyTo = {
      name: "Keenesse",
      email: "hello@keenesse.com",
    };
    sendSmtpEmail.templateId = 5;
    sendSmtpEmail.params = {
      coachName,
      customerName,
      customerEmail,
      packageName,
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