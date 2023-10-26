import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Box, Grid } from '@mui/material';

import styles from './../styles/home.module.scss';
import FormBox from '@/components/formBox/formBox';
import BackgroundImage from './../assets/tracking-service-image.png'


export default function Home() {
  
  return (
    <div className={styles.home__page}>   
      <Head>
        <title>Acompanhe suas Entregas em Tempo Real | Loggi</title>
      </Head>
      <Box  className={styles.home__container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={styles.home__imageContainer}>
              <Image className={styles.home__backgroundImage} src={BackgroundImage} alt='Background image'/>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormBox />
          </Grid>          
        </Grid>
      </Box>
    </div>
  )
}