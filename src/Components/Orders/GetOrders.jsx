import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Orders from '../../API/Orders'
import Logo from '../Logo/Logo';
import './GetOrders.css'

function GetOrders() {
  const { trackingCode } = useParams();
  const [order, setOrder] = useState(null); 

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orders = await Orders();
        const selectedOrder = orders.find((item) => item.id === Number(trackingCode));
        setOrder(selectedOrder);
      } catch (error) {
        console.error("Erro na busca dos dados:", error);
      }
    };
    fetchOrder();
  }, [trackingCode]);

  console.log("Order:", order);

  if (!order) {
    return <div className="loading">Por favor espere um momento</div>; 
  }

  return (
    <>
      <Logo
		containerClassName="logo-loggi"
		imageClassName="logo-track"
		/>  
      <div className="tracking-container">
      <div>
        <h2 className="order-header">Status do Pedido</h2>
        <div className="order-details">
            <p><strong className="track-paragraph">ID do Pedido:</strong> {order.id}</p>
            <p><strong className="track-paragraph">Descrição:</strong> {order.descricao}</p>
            <p><strong className="track-paragraph">Mensageiro:</strong> {order.mensageiro}</p>
            <p><strong className="track-paragraph">Cliente:</strong> {order.cliente}</p>
            <p><strong className="track-paragraph">Data do Pedido:</strong> {order.dataPedido}</p>
            <p><strong className="track-paragraph">Data Prevista de Entrega:</strong> {order.dataPrevistaEntrega}</p>
        </div>
      </div>
        <div>
            <h2 className="order-header">Histórico</h2>
            <div className="status-history">
                {order.historicoStatus.map((statusItem) => (
                <div key={statusItem.status} className="status-item">
                    <p><strong>Descrição:</strong> {statusItem.descricao}</p>
                    <p><strong>Data do status:</strong> {statusItem.dataStatus}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
    </>
  );
}

export default GetOrders;