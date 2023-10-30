import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import lang from "@/_mock/lang/pt-BR";
import { FooterMenu } from "./FooterMenu";

export function Footer() {
  const { footer } = lang;
  return (
    <Box component="footer">
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: 0,
            lg: 8,
          },
        }}
      >
        <FooterMenu items={footer.footerMenuLinks} />
        <Divider />
      </Container>
    </Box>
  );
}
