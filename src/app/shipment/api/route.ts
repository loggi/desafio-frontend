import { fakePackageData } from "@/mock";

/**
 * used to get shipment data
 * @param request
 * @returns
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const trackingNumber = searchParams.get("trackingNumber");
  let data = fakePackageData;
  if (trackingNumber) {
    data = fakePackageData.filter(
      (item) => item.trackingNumber === trackingNumber
    );
  }

  return Response.json({ data });
}

/**
 * user to get shipment data
 * @param request
 * @returns
 */
export async function POST(request: Request) {
  const body = await request.json();

  const data = fakePackageData.filter((item) => {
    if (body?.filterType === "code") {
      return item.trackingNumber === body.value;
    } else {
      return item.userCpf === body.value;
    }
  });
  return Response.json({ data });
}
