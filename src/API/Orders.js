const API_URL = 'https://api-loggi.vercel.app/pedidos'

async function Orders() {
    const connect = await fetch(API_URL);
    const transformConnect = await connect.json();
    return transformConnect
}

export default Orders;