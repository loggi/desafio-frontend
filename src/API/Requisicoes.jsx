import { toast } from "react-toastify";
const api ='https://api-loggi.vercel.app/';
// const api ='http://localhost:8080/';

const requisicoesHTTP = async (method = 'GET', id)=>{
  const req = await fetch(`${api}/pedidos/${id}`, {
    method: method,
    headers: {
      "Content-Type":"application/json",
    }
  })
    // const resp = req.json()
    
    // if(req.status >= 400 || req.status < 500){
    //   return toast.error('Dado não encontrado, por favor, verifique a digitação.')

    // }
    // if(req.status >= 500 || req.status <= 599){
    //   return toast.error('Algo deu errado, tente novamente em instantes')
    // }
    
    // console.log(method)
    // console.log(req)
    // console.log(req.status)

    return req
}

export default requisicoesHTTP

