import React from "react";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Header } from "@/components/Header";
import ptBR from "@/_mock/lang/pt-BR";
import { Footer } from "@/components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: ptBR.metadata.title,
  description: ptBR.metadata.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <Header />
          <Box
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            component="main"
          >
            {children}
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
