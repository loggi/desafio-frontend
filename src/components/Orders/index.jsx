import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getOrdersTrack from '../../API/orders';
import Header from '../Header';
import { BoxDelivery, BoxStatus } from '../BoxInfos';
import { pStyles, orderHistory, styleStatus} from './styles';
import StatusImage from '../StatusImage';

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
        <BoxStatus
          orderNumber={order.id}
          status={order.descricao} />
        <ul>
          {order.historicoStatus.map((statusItem, index) => (
            <section key={statusItem.status} style={orderHistory}>
              <StatusImage status={statusItem.status} isLast={index === order.historicoStatus.length - 1} />
              <div style={styleStatus}>
                <span>{statusItem.descricao}</span>
                <span>Data: {statusItem.dataStatus}</span>
              </div>
            </section>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Orders;