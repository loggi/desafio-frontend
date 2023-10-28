import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";

export const metadata = {
  title: "Rastreamento de produto",
  description: "Rastreamento de produto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <ThemeRegistry>
          <AppBar
            position="fixed"
            sx={{
              zIndex: 2000,
              boxShadow: "none",
              borderBottom: "1px solid #eee",
            }}
          >
            <Toolbar sx={{ backgroundColor: "background.paper", py: 4 }}>
              <Container>
                <Box sx={{ display: "flex" }}>
                  <Image
                    alt="Loggy logo azul"
                    src="images/logo.svg"
                    width={100}
                    height={33.69}
                  />
                  <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{ ml: 4, display: ["none", "block"] }}
                  >
                    Rastreamento de pedidos
                  </Typography>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              mt: ["64px", "70px", "94px"],
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
