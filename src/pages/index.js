import Head from 'next/head';
import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, Grid } from '@mui/material';

import styles from './../styles/home.module.scss';

import { trackOrder } from '@/api/order';
import { useRouter } from 'next/navigation';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default function Home() {
  
  const [trackingCode, setTrackingCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter()
  
  const handleTrackingClick = async () => {   
    setLoading(true) 
    const orders = await trackOrder();
    const order = orders.find((item) => item.id === Number(trackingCode));
    
    if (order) {  
      setError(false) 
      setLoading(false)   
      router.push(`/order/${order.id}`);
    } else {
      setLoading(false)
      setError(true)
      console.log('Order not found');
    }
  } 

  return (
    <div className={styles.home__page}>   
      <Head>
        <title>Acompanhe suas Entregas em Tempo Real | Loggi</title>
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={styles.home__imageContainer}>
              <LocalShippingOutlinedIcon />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={styles.home__trackingBox} >
              <Typography variant="h4" gutterBottom mb={4}  color="#00baff">
                Acompanhe com a Loggi a entrega do seu pedido. 
              </Typography>
              <Typography variant="body1" gutterBottom mb={2} >
                  Digite o código de rastreamento do seu pedido.
              </Typography>
              <Box className={styles.trackingBox__form} 
                component="form"
                noValidate
                autoComplete="off"
              >
                <TextField sx={{ marginBottom: '20px', marginRight: '20px'}}
                  id="outlined-basic" 
                  label="Código de rastreamento"
                  variant="outlined"                  
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                />
                <Button sx={{ height: '54px'}}
                  variant="contained"
                  onClick={handleTrackingClick}
                >
                  Acompanhar pedido
                </Button>
              </Box>
              
              {loading && 
                <Typography variant="body1" gutterBottom mb={1}  sx={{ color: '#666',}}>
                    loading...
                </Typography>                
              }

              {!loading && error && 
                <Typography variant="body1" gutterBottom mb={1}  sx={{ color: 'red',}}>
                    Codigo nao encontrado
                </Typography>
              }
            </Card>
          </Grid>          
        </Grid>
      </Box>
    </div>
  )
}