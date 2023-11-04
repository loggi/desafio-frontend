import { fakePackageData } from "@/mock";

export async function GET(request: Request) {
  return Response.json({ data: fakePackageData });
}
