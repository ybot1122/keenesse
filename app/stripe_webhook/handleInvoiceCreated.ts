type StripeInvoice = {};

export default async function handleInvoiceCreated(invoice: StripeInvoice) {
  console.log(invoice);
}
