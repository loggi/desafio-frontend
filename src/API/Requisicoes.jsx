import { toast } from "react-toastify";

console.log(toast);

export const requisicoesHTTP(method = 'GET', id){
  const req = fetch(`https://api-loggi.vercel.app/${id}`, {
    method: method,
    headers: {
      "Content-Type":"application/json",
    }
  })
    const resp = req.json()
    if(req.status >= 400 || req.status < 500){
      return 
    }
}
// const response = await fetch(`${API}/${caminho}`, {
//   method: metodo,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   },
// });
// // colocar parametro para metodo e colocar
// const data = await response.json();
// if(response.status === 401){
//   return toast.error("Por favor, faça login novamente!")  
// }
// return data
