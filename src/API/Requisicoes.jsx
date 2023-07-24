// http://localhost:5173
// https://api-loggi.vercel.app/pedidos/

const requisicoesHTTP = async (method, id)=>{
const req = await fetch(`http://localhost:8080/pedidos/${id}`, {
    method: method,
    headers: {
      "Content-Type":"application/json",
    }, 
  })
    return req.json()
}

export default requisicoesHTTP
