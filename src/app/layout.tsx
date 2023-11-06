import React from "react";

import HeaderBar from "@/components/Header";
import { MainContainer } from "@/components";

export const metadata = {
  title: "Loggi",
  description: "Encontre sua encomenda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderBar>
          <MainContainer>{children}</MainContainer>
        </HeaderBar>
      </body>
    </html>
  );
}
