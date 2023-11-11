import { ReactNode } from "react";

import ThemeRegistry from "@/components/theme-registry/ThemeRegistry";
import { Header } from "@/components";

export const metadata = {
  title: "Acompanhe suas Entregas em Tempo Real | Loggi",
  description:
    "Com a Loggi você consegue acompanhar sua entrega e saber exatamente quando seu pedido vai chegar. Acesse nosso rastreador e veja como é fácil!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />

          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
