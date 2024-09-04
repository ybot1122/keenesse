export default async function createCalEventType(
  duration: number,
  customer_name: string,
  package_name: string,
  checkout_session_id: string,
) {
  console.log(checkout_session_id);

  const title = `${customer_name} - ${package_name}`;

  try {
    const result = await fetch(
      `https://api.cal.com/v1/event-types?apiKey=${process.env.CAL_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          length: duration,
          metadata: {},
          title,
          slug: slugify(`${title}-${Math.floor(Date.now() / 1000)}`),
        }),
      },
    );

    console.log(result.status);
    console.log(await result.json());
  } catch (e) {
    console.error(e);
  }
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
