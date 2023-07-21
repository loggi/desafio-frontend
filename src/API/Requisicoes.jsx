const requisicoesHTTP = async (method, id)=>{
  const req = await fetch(`https://api-loggi.vercel.app/pedidos/${id}`, {
    method: method,
    headers: {
      "Content-Type":"application/json",
    }, 
  })
    return req.json()
}

export default requisicoesHTTP

