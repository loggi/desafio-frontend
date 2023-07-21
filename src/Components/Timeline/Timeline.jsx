import {
  Content,
  Container,
  IconWrapper,
  TimelineContainer,
  IconCreated,
  IconSent,
  IconTruck,
  Line,
  IconStore,
  IconDelivered,
  TitleStatus,
  TitleOrder,
  TextStatus,
} from "./Styled";
import data from "../../data.json";
import { Navigate, useParams } from "react-router";

const Timeline = () => {
  const { TrackingNumber } = useParams(); 
  
  const order = data.pedidos.find(pedido => String(pedido.id) === String(TrackingNumber));

  if (!order) {
    return <Navigate to="/Error" />
  }

  const phases = [
    {
      Icon: IconCreated,
      title: 'Envio Gerado',
      date: order.historicoStatus[0] ? order.historicoStatus[0].dataStatus : "______________"
    },
    {
      Icon: IconSent,
      title: 'Enviado',
      date: order.historicoStatus[1] ? order.historicoStatus[1].dataStatus : "______________"
    },
    {
      Icon: IconTruck,
      title: 'Em Rota',
      date: order.historicoStatus[2] ? order.historicoStatus[2].dataStatus : "______________"
    },
    {
      Icon: IconStore,
      title: 'Saiu Para Entrega',
      date: order.historicoStatus[3] ? order.historicoStatus[3].dataStatus : "______________"
    },
    {
      Icon: IconDelivered,
      title: 'Entregue',
      date: order.historicoStatus[4] ? order.historicoStatus[4].dataStatus : "______________"
    },
  ];


  return (
    <>
    <TitleOrder>Número de Rastreio: {TrackingNumber}</TitleOrder>
    <TimelineContainer>
      <Line />
      {phases.map(({Icon, title, date}, index) => (
        <>
          <Container>
            <IconWrapper key={index}>
              <Icon />
            </IconWrapper>
            <Content>
              <TitleStatus>{title}</TitleStatus>
              <TextStatus>Data: {date}</TextStatus>
            </Content>
          </Container>
        </>
      ))}
    </TimelineContainer>
    </>
  );
};



export default Timeline;