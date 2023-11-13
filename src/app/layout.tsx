import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { MuiProvider } from '@/components/MuiProvider'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rastreie a sua entrega - Loggi',
  description: 'Acompanhe as suas entregas em tempo real'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <MuiProvider>
        <body id='__next' className={roboto.className}>
          {children}
        </body>
      </MuiProvider>
    </html>
  )
}
