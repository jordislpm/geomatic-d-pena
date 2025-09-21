// app/api/reviews/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const accountId = process.env.GOOGLE_ACCOUNT_ID!;
  const locationId = process.env.GOOGLE_LOCATION_ID!;
  const apiKey = process.env.GOOGLE_API_KEY!;

  if (!accountId || !locationId || !apiKey) {
    return NextResponse.json(
      { error: "Google API environment variables are missing" },
      { status: 500 }
    );
  }

  const url = `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accountId}/locations/${locationId}/reviews?key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "Failed to fetch reviews", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err },
      { status: 500 }
    );
  }
}
