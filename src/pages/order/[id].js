import { Container, Box  } from '@mui/material';

import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import styles from './order.module.scss';
import { trackOrder } from '@/api/order';
import TrackingSteps from '@/components/trackingSteps/trackingSteps';

export default function Order() {

  const router = useRouter()
  const trackingCode = router.query.id
  const [order, setOrder] = useState(null);

  const getOrder = async () => {   
    const orders = await trackOrder();
    const serchedOrder = orders.find((item) => item.id === Number(trackingCode));
    setOrder(serchedOrder)    
  } 

  useEffect(() => {
    if(trackingCode) {
      getOrder();
    }
  }, [trackingCode])

  return (
    <div className={styles.tracker}>   
      <Head>
        <title>Acompanhe suas Entregas em Tempo Real | Loggi</title>
      </Head>
      <Container sx={{ margin: '50px auto', padding: '50px' }} >
        <Box className={styles.order__info}>

        </Box>
        <Box className={styles.order__trackingSteps}>
          <TrackingSteps order={order} />
        </Box>        
      </Container>
    </div>
  )
}