import {TimelineContainer, IconCreated, IconSent, IconTruck, IconStore, IconDelivered } from "./Styled";
import data from "../../data.json";
import { styled } from "styled-components";
import { useParams } from "react-router";

const Timeline = () => {
  const {numeroRastreio} = useParams(); 
  
  const pedido = data.pedidos.find(pedido => String(pedido.id) === String(numeroRastreio));

  const etapas = [
    {
      Icon: IconCreated,
      title: 'Envio Gerado',
      date: pedido.historicoStatus[0] ? pedido.historicoStatus[0].dataStatus : "VALOR DEFAULT"
    },
    {
      Icon: IconSent,
      title: 'Enviado',
      date: pedido.historicoStatus[1] ? pedido.historicoStatus[1].dataStatus : "VALOR DEFAULT"
    },
    {
      Icon: IconTruck,
      title: 'Em Rota',
      date: pedido.historicoStatus[2] ? pedido.historicoStatus[2].dataStatus : "VALOR DEFAULT"
    },
    {
      Icon: IconStore,
      title: 'Saiu Para Entrega',
      date: pedido.historicoStatus[3] ? pedido.historicoStatus[3].dataStatus : "VALOR DEFAULT"
    },
    {
      Icon: IconDelivered,
      title: 'Entregue',
      date: pedido.historicoStatus[4] ? pedido.historicoStatus[4].dataStatus : "VALOR DEFAULT"
    },
  ];


  return (
    <>
    <h1>{numeroRastreio}</h1>
    <TimelineContainer>
      {etapas.map(({Icon, title, date}, index) => (
        <>
          <Container>
            {/* {index !== 0 && <TimelineLine />} */}
            <IconWrapper key={index}>
              <Icon />
            </IconWrapper>
            <Content>
              <p>{title}</p>
              <p>Data: {date}</p>
            </Content>
          </Container>
        </>
      ))}
    </TimelineContainer>
    </>
  );
};

export const Content = styled.div`
  width: 100%; 
  text-align: center;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  height: 70px;
  border: 2px solid #006AF0;
  background-color: #006AF0;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
  position: relativo;

  &::after { 
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    left: 70px;
    border-bottom: 1px solid #000;
  }

  &::before { 
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    right: 70px;
    border-bottom: 1px solid #000;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default Timeline;