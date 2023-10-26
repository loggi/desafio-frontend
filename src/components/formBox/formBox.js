import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button } from '@mui/material';

import styles from './formBox.module.scss';

import { trackOrder } from '@/api/order';
import { useRouter } from 'next/navigation';

export default function FormBox() {
  
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
        <Typography variant="body1" gutterBottom mt={2}  sx={{ color: '#666',}}>
            loading...
        </Typography>                
      }

      {!loading && error && 
        <Typography variant="body1" gutterBottom mt={2}  sx={{ color: 'red',}}>
            Codigo nao encontrado
        </Typography>
      }
    </Card>
  )
}