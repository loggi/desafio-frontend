import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../assets/Logo.svg';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Acompanhe suas entregas em tempo real | Loggi',
  description: 'Com a Loggi você consegue acompanhar sua entrega e saber exatamente quando seu pedido vai chegar. Acesse nosso rastreador e veja como é fácil!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <Link href="/"> 
                <Image
                  priority
                  src={Logo}
                  alt="Loggi"
                />
              </Link>
            </Toolbar>
          </AppBar>
          
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mt: ['48px', '56px', '64px'],
              height: '100%'
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
