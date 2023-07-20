const API_BASE_URL = 'https://api-loggi.vercel.app';

export const trackOrder = async (pedidoId) => {
    const response = await fetch(`${API_BASE_URL}/pedidos/${pedidoId}`);

    if (response.ok) {
        return response.json();
    }

    if (response.status === 404) {
        throw new Error('Pedido não encontrado');
    }

    throw new Error('Falha ao se comunicar com o servidor, tente novamente mais tarde.')
}