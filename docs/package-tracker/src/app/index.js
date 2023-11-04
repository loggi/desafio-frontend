import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HighlightBanner from '@/components/HighlightBanner';
import Box from '@mui/material/Box';

export default function HomePage({ children }) {
  return (
    <>
      <Header />
      <Box component="main" sx={{ backgroundColor: 'blue' }}>
        <HighlightBanner />
      </Box>
      <Footer />
    </>
  );
}
