import { Error } from "@/components";
import { Container } from "@mui/material";

export default async function NotFound() {
  return (
    <Container>
      <Error text="404 - Nada encontrado para sua busca!" />
    </Container>
  );
}
