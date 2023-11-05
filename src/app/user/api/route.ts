import { fakeUserData, fakePackageData } from "@/mock";

/**
 * used to get the user data
 */
async function GET(request: Request) {
  return Response.json({ data: fakeUserData });
}

/**
 * used in the login form
 */
async function POST(request: Request) {
  const body = await request.json();
  if (
    body?.email === fakeUserData.email &&
    body?.password === fakeUserData?.password
  ) {
    return Response.json({ data: fakeUserData, shipment: fakePackageData });
  } else {
    return Response.json({ error: "User not found" }, { status: 404 });
  }
}

export { GET, POST };
