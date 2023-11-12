import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { MuiProvider } from '@/components/mui-provider'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loggi Tracking Dashboard',
  description: 'Track your order in real-time'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  )
}
