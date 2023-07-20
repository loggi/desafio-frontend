import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Orders from '../../API/Orders'

function GetOrders() {
  const { trackingCode } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orders = await Orders();
        console.log("Orders:", orders);
        const selectedOrder = orders.find((item) => item.id === Number(trackingCode));
        console.log("Selected Order:", selectedOrder);
        setOrder(selectedOrder);
      } catch (error) {
        console.error("Erro na busca dos dados:", error);
      }
    };
    fetchOrder();
  }, [trackingCode]);

  console.log("Order:", order);

  if (!order) {
    return <div>Please wait a moment</div>; 
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

export default GetOrders;