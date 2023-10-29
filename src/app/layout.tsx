import React from "react";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Header } from "@/components/Header";
import ptBR from "@/_mock/lang/pt-BR";

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
          <Box component="main">{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
