const calendlyPersonalAccessToken = process.env.CALENDLY_PAT ?? "";

export default async function generateOneTimeCalendlyUrl() {
  let calendlyUrl = "";

  try {
    const calendlyResponse = await fetch(
      "https://api.calendly.com/scheduling_links",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${calendlyPersonalAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          max_event_count: 1,
          owner:
            "https://api.calendly.com/event_types/27eb0c2c-469c-4403-9348-587a9656f278",
          owner_type: "EventType",
        }),
      },
    );

    const data = await calendlyResponse.json();

    calendlyUrl = data.resource.booking_url;
  } catch (e: any) {
    console.log(e);
    console.log("Failed to generate Calendly URL. This is bad.");
    throw new Error("Failed to generate Calendly URL.");
  }

  return calendlyUrl;
}
