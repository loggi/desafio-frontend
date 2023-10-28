import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '@/assets/Logo.svg';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';

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

            <Box sx={{ 
              display: 'flex', 
              background: "url(https://s3-sa-east-1.amazonaws.com/loggi-production-static/tracker-web-ui/images/package-ff9eb72c01531c46f6a2c2a5fbcb975c.png) no-repeat 100% 100%,linear-gradient(180deg,#006aff,#00baff)",
              backgroundSize: '550px,100vw',
              height: 640
            }}>
              <Grid xs={4} sx={{
                p: {
                  md: 14,
                  sm: 8,
                  xs: 4
                },
                maxWidth: '1440px',
                mx: 'auto'
              }}>
                {children}
              </Grid>
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
