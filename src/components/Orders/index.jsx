import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getOrdersTrack from '../../API/orders';

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
    <div>
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
  );
}

export default Orders;