import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Box component="main">{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
