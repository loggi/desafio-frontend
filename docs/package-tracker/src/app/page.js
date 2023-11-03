import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Box component="main">{children}</Box>
      </body>
    </html>
  );
}
