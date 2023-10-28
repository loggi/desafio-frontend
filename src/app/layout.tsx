import React from "react";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Header } from "@/components/Header";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Loggi",
  description:
    "Com a Loggi você consegue acompanhar sua entrega e saber exatamente quando seu pedido vai chegar. Acesse nosso rastreador e veja como é fácil!",
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
