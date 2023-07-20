import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getOrdersTrack from '../../API/orders';
import Header from '../Header';
import {BoxDelivery, BoxStatus} from '../BoxInfos';
import { pStyles } from './styles';

function Orders() {
  const { trackingCode } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const orders = await getOrdersTrack();
      console.log('Orders:', orders);
      const selectedOrder = orders.find((item) => item.id === Number(trackingCode));
      console.log('Selected Order:', selectedOrder);
      setOrder(selectedOrder);
    };

    fetchOrder();
  }, [trackingCode]);

  if (!order) {
    return <div>Loading...</div>;
  }

  const getStatusImage = (status) => {
    const statusToImageMap = {
      PEDIDO_RECEBIDO: "entregue.png",
      EM_ROTA_PARA_COLETA: "enviado.png",
      PACOTE_COLETADO: "pedido.png",
    };
    const imageName = statusToImageMap[status];
    return `./assets/${imageName}`;
  };

  return (
    <>
      <Header img src="./src/assets/logo.png" alt="logo loggi" style={{ height: '80px', marginRight: '10px' }} />
      <div>
        <div style={pStyles}>
        <span> Obaaa!</span>
        <span>Seu pedido está em transporte!</span>
        </div>
        <BoxDelivery
          messenger={order.mensageiro}
          client={order.cliente}
          orderDate={order.dataPedido}
          deliveryDate={order.dataPrevistaEntrega}
        />
        <BoxStatus 
        orderNumber={order.id}
        status={order.descricao}/>
        <h2>Histórico de Status</h2>
        <ul>
          {order.historicoStatus.map((statusItem) => (
            <li key={statusItem.status}>
              <p>Status: {statusItem.status}</p>
              <p>Descrição: {statusItem.descricao}</p>
              <p>Data do status: {statusItem.dataStatus}</p>
              <img src={getStatusImage(statusItem.status)} alt={statusItem.status} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Orders;