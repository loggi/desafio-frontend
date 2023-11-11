import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Acompanhe suas entregas | Loggi",
  description:
    "Com a Loggi você consegue acompanhar sua entrega e saber exatamente quando seu pedido vai chegar. Acesse nosso rastreador e veja como é fácil",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
