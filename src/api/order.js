const API_URL = 'https://api-loggi.vercel.app';

export const trackOrder = async () => {
    const response = await fetch(`${API_URL}/pedidos`);

    if (response.ok) {
        return response.json();
    }

    if (response.status === 404) {
        throw new Error('O pedido não foi encontrado');
    }

    throw new Error('Erro na comunicação com o servidor. Por favor tente novamente mais tarde.')
}