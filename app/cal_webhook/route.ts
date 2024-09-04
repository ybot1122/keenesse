import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log("req received");
  const text = await request.json();
  console.log(text);

  return new NextResponse(
    JSON.stringify({
      message: "Unhandled event",
    }),
    {
      status: 200,
    },
  );
}
