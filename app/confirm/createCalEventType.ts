export default async function createCalEventType(
  duration: number,
  customer_name: string,
  package_name: string,
) {
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
          title: `${customer_name} - ${package_name}`,
          slug: "created-from-api-123",
        }),
      },
    );

    console.log(result.status);
    console.log(await result.json());
  } catch (e) {
    console.error(e);
  }
}
