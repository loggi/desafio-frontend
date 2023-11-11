import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const trackingCode = searchParams.get("trackingCode");

  if (!trackingCode) return NextResponse.json({});

  const response = await fetch("http://localhost:3000/tracking.json");
  const data = await response.json();

  const deliveryFound = data.find(
    (item: { order_number: string }) => item.order_number === trackingCode
  );

  if (!deliveryFound) {
    return NextResponse.json({
      hasError: true,
      error: "delivery not found",
      data: null,
    });
  }

  return NextResponse.json({ data: deliveryFound });
}
