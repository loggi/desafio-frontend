import { NextRequest, NextResponse } from "next/server";
import Trackings from "../../lib/tracking.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const trackingCode = searchParams.get("trackingCode");

  if (!trackingCode) return NextResponse.json({});

  const deliveryFound = Trackings.find(
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
