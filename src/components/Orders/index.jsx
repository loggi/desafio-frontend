import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getOrdersTrack from '../../API/orders';
import Header from '../Header';
import BoxDelivery from '../BoxDelivery';
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
        <h2>Status do Pedido</h2>
        <p>ID do Pedido: {order.id}</p>
        <p>Status: {order.status}</p>
        <p>Descrição: {order.descricao}</p>
        <h2>Histórico de Status</h2>
        <ul>
          {order.historicoStatus.map((statusItem) => (
            <li key={statusItem.status}>
              <p>Status: {statusItem.status}</p>
              <p>Descrição: {statusItem.descricao}</p>
              <p>Data do status: {statusItem.dataStatus}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Orders;