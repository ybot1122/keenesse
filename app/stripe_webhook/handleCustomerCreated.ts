type StripeCustomer = {
  id: string;
  email: null | string;
  name: null | string;
  object: "customer";
};

export default async function handleCustomerCreated(customer: StripeCustomer) {
  console.log(customer);

  if (!customer.email && !customer.name) {
    throw new Error("Custome does not have name or email");
  }
}
