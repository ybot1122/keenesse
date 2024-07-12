type StripeInvoice = {
  lines: {
    data: {}[];
  };
};

export default async function handleInvoiceCreated(invoice: StripeInvoice) {
  console.log(invoice);
  invoice.lines.data.forEach((d) => console.log(d));
}
