import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import lang from "@/_mock/lang/pt-BR";
import { FooterMenu } from "./FooterMenu";
import { Logo } from "../Logo";

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
          paddingBottom: {
            xs: 2,
            lg: 2,
          },
          paddingTop: {
            xs: 4,
            lg: 6,
          },
        }}
      >
        <FooterMenu items={footer.footerMenuLinks} />
        <Divider />
        <Button component={Link} href="/" sx={{ marginTop: 2 }} fullWidth>
          <Typography variant="caption" textTransform="initial" marginLeft={1}>
            {`© Loggi ${new Date().getFullYear()}`}
          </Typography>
          <Typography
            variant="caption"
            textTransform="initial"
            marginLeft={1}
            marginRight={1}
            component="span"
          >
            |
          </Typography>
          <Logo ariaLabel="Logo Loggi" />
        </Button>
      </Container>
    </Box>
  );
}
