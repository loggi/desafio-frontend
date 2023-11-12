import * as React from 'react'
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import ThemeRegistry from '@/styles/ThemeRegistry'

export const metadata = {
  title: 'Acompanhe suas Entregas em Tempo Real | Loggi',
  description:
    'Com a Loggi você consegue acompanhar sua entrega e saber exatamente quando seu pedido vai chegar. Acesse nosso rastreador e veja como é fácil!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeRegistry>
          {/* <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
              <Typography variant="h6" noWrap component="div" color="black">
                Next.js App Router
              </Typography>
            </Toolbar>
          </AppBar> */}
          <Box component="main">{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
