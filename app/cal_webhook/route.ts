import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const text = await request.text();
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
