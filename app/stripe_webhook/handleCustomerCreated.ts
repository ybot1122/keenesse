import * as Brevo from "@getbrevo/brevo";
import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

type StripeCustomer = {
  id: string;
  email: null | string;
  name: null | string;
  object: "customer";
};

export default async function handleCustomerCreated(customer: StripeCustomer) {
  if (!customer.email && !customer.name) {
    return new NextResponse(
      JSON.stringify({
        message: "Customer does not have name or email",
      }),
      { status: 200 },
    );
  }

  let apiInstance = new Brevo.ContactsApi();

  apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, BREVO_API_KEY);

  const createContact = new Brevo.CreateContact();
  if (customer.email) {
    createContact.email = customer.email;
  }
  if (customer.name) {
    const name = customer.name.trim();
    const lastSpacePosition = name.lastIndexOf(" ");

    if (lastSpacePosition === -1) {
      createContact.attributes = {
        FIRSTNAME: name,
      };
    } else {
      createContact.attributes = {
        FIRSTNAME: name.substring(0, lastSpacePosition),
        LASTNAME: name.substring(lastSpacePosition + 1, name.length),
      };
    }
  }
  createContact.listIds = [4];
  createContact.updateEnabled = true;

  const promise = new Promise((resolve, reject) => {
    apiInstance.createContact(createContact).then(
      function (data) {
        resolve("success");
      },
      function (error) {
        console.error(error);
        reject("Failed to create Brevo contact");
      },
    );
  });

  await promise;
}
