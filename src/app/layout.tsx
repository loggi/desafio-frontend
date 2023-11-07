import React from "react";

import HeaderBar from "@/components/Header";
import { MainContainer, Footer } from "@/components";

import "./main.css";

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
        <HeaderBar />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </body>
    </html>
  );
}
