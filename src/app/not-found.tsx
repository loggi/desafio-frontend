import Link from "next/link";
import { Error } from "@/components";
import { Container } from "@mui/material";
import { HOME } from "@/config/route-utils";

export default async function NotFound() {
  //   const headersList = headers()
  //   const domain = headersList.get('host')
  //   const data = await getSiteData(domain)
  return (
    <Container>
      <Error text="404" />
    </Container>
  );
}
