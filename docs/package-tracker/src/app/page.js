import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HighlightBanner from '@/components/HighlightBanner';

export default function HomePage({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Box component="main" sx={{ backgroundColor: 'blue' }}>
          <HighlightBanner />
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
