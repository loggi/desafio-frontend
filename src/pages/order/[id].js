import { Container, Typography  } from '@mui/material';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import styles from './order.module.scss';
import { trackOrder } from '@/api/order';
import TrackingSteps from '@/components/trackingSteps/trackingSteps';
import OrderInfo from '@/components/orderInfo/orderInfo';

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
    <div className={styles.order__page}>   
      <Head>
        <title>Acompanhe suas Entregas em Tempo Real | Loggi</title>
      </Head>
      <Container className={styles.order__container} >
        {order !== null && order !== undefined &&
          <>
            <OrderInfo order={order} />
            <TrackingSteps order={order} />
          </>
        }
        {order === null || order === undefined && 
          <Container className={styles.orderNotFound__container}>
            <Typography variant="h4" gutterBottom mb={4}  >
              Pedido nao encontrado.  
            </Typography>
            <Typography variant="body1" gutterBottom mb={2} >
              Por favor <Link href="/">tente novamente</Link>.
            </Typography>
          </Container>
        }   
      </Container>
    </div>
  )
}