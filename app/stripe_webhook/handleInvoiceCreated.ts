type StripeInvoice = {
  lines: {
    data: {
      plan: {
        product: string;
      };
    }[];
  };
};

export default async function handleInvoiceCreated(invoice: StripeInvoice) {
  console.log(invoice);
  invoice.lines.data.forEach((d) => console.log(d));
}
