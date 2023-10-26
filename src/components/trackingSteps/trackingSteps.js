import { Box, Typography   } from '@mui/material';

import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

import styles from './trackingSteps.module.scss';

export const trackingStatusImage = {
  PEDIDO_RECEBIDO: 'Pedido recebido',
  EM_ROTA_PARA_COLETA: 'Em rota para coleta',
  PACOTE_COLETADO: 'Pacote coletado',
  EM_ROTA_DE_ENTREGA: 'Em rota de entrega',
  FINALIZADO: 'Finalizado'
};

export const trackingStatusSteps = [
  {
    step: 1,
    description: 'Pedido recebido',
  },
  {
    step: 2,
    description: 'Em rota para coleta',
  },
  {
    step: 3,
    description: 'Pacote coletado',
  },
  {
    step: 4,
    description: 'Em rota de entrega',
  },
  {
    step: 5,
    description: 'Finalizado'
  }
]

export default function TrackingSteps({order}) {

  const getTrackingStatus = (status) => {
    switch (status) {
      case trackingStatusImage.PEDIDO_RECEBIDO:
        return <AddShoppingCartOutlinedIcon />
        break;
      case trackingStatusImage.EM_ROTA_PARA_COLETA:
        return <LocalShippingOutlinedIcon />
        break;
      case trackingStatusImage.PACOTE_COLETADO:
        return <InventoryOutlinedIcon />
        break;
      case trackingStatusImage.EM_ROTA_DE_ENTREGA:
        return <LocalShippingOutlinedIcon />
        break;
      case trackingStatusImage.FINALIZADO:
        return <TaskAltOutlinedIcon />
        break;
      default:
        return <LocalShippingOutlinedIcon />
    }
  }

  return (
    <Box className={styles.order__trackingSteps}>
      {order && order.historicoStatus && 
        <ul className={styles.tracker__statusList}>
          {order.historicoStatus.map((status, index) => {
            let curretStatus = index + 1 === order.historicoStatus.length;
              return (<li key={index} className={`${curretStatus ? styles.currentStatus : styles.status}`}>
              <Box className={styles.trackerStatus__iconContainer}>
                {getTrackingStatus(status.descricao)}
              </Box>                
              <Box className={styles.trackerStatus__infoContainer}>
                <Typography variant="body1" gutterBottom color="#000">
                  {status.descricao}
                </Typography>
                <Typography variant="body2" gutterBottom color="#999">
                  {status.dataStatus}
                </Typography>
              </Box>              
            </li>)
          })}
          {order.historicoStatus.length < 5 && 
            trackingStatusSteps.map((step, i) => {
              return (
                step.step > order.historicoStatus.length ? 
                  <li key={i} className={styles.trackerStatus__inactive}>
                    <Box className={styles.trackerStatus__iconContainer}>
                      {getTrackingStatus(step.description)}
                    </Box>                
                    <Box className={styles.trackerStatus__infoContainer}>
                      <Typography variant="body1" gutterBottom color="#000">
                        {step.description}
                      </Typography>
                      <Typography variant="body2" gutterBottom color="#999">
                        sem data
                      </Typography>
                    </Box>                    
                  </li> 
                : ''
              )
            })
          }
        </ul>
      }
    </Box>
  )
}