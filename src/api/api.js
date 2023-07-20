import axios from "axios";

const api = axios.create({
  baseURL: "https://api-loggi.vercel.app/",
});

export const getOrder = (id) => {
    return api
      .get(`/pedidos/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };