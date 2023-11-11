import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "../styles/variables.css"
import "../styles/globals.css"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"
import { AttainNewCustomers } from "@/components/attainNewCustomers/AttainNewCustomers"

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
      <body className={montserrat.className}>
        <Header />
        {children}
        <AttainNewCustomers />
        <Footer />
      </body>
    </html>
  )
}
