import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../src/Components/Header';
import Head from '../src/Components/Head';
import Body from '../src/Components/Body';
import Footer from '../src/Components/Footer';

const ResponsiveContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const DesktopContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 960,
});

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <ResponsiveContainer>
      <Header />
      {isDesktop ? (
        <DesktopContainer
          sx={{
            width: "100vw", 
            maxWidth: "100vw",
          }}
        >
          <Head home />
          <Body />
        </DesktopContainer>
      ) : (
        <>
          <Head home />
          <Body />
        </>
      )}
      <Footer />
    </ResponsiveContainer>
  );
}
