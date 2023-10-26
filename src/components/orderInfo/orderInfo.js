import { Box, Card, Grid, Typography  } from '@mui/material';

import styles from './orderInfo.module.scss';
import { formatDate } from '@/utils/formatDate';

export default function OrderInfo({ order }) {
  console.log(order)

  const { localEntrega } = order;

  return (
    <Box className={styles.order__info}>
      <Typography variant="h4" gutterBottom mb={2} >
        Detalhes do pedido {order.id}
      </Typography>
      <Grid className={styles.orderInfo__cardContainer} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={styles.orderInfo__card}>
            <Typography variant="h6" gutterBottom mb={2} >
              Local de entrega
            </Typography>
            <Typography>
              {localEntrega?.logradouro}, {localEntrega?.numero} {localEntrega?.complemento}<br/>
              {localEntrega?.bairro}, {localEntrega?.cidade}, {localEntrega?.estado}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={styles.orderInfo__card}>
            <Typography variant="h6" gutterBottom mb={2} >
              Status do pedido: {order.descricao}
            </Typography>
            <Typography variant="body1" gutterBottom mb={2} >
              {/* Data do pedido: {order.dataPedido}<br></br> */}
              Data do pedido: {formatDate(order.dataPedido)}<br></br>              
              {order.dataEntrega ? `Data de entrega: ${formatDate(order.dataEntrega)}` : `Data prevista de entrega: ${formatDate(order.dataPrevistaEntrega)}`}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}