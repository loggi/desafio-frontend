import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const trackingCode = searchParams.get("trackingCode");

  if (!trackingCode) return NextResponse.json({});

  const file = await fs.readFile(
    process.cwd() + "/src/app/lib/tracking.json",
    "utf8"
  );
  const data = JSON.parse(file);

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
