import * as React from 'react';
import Header from '../src/Components/Header';
import Head from '../src/Components/Head';
import Body from '../src/Components/Body';
import Footer from '../src/Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Head home/>
      <Body />
      <Footer />
    </>
  );
}
