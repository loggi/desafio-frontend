import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InstallAppBanner from '@/components/InstallAppBanner';
import HighlightBanner from '@/components/HighlightBanner';
import Box from '@mui/material/Box';

export default function HomePage() {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#47b8f8' }}>
        <HighlightBanner />
      </Box>
      <InstallAppBanner />
      <Footer />
    </>
  );
}
