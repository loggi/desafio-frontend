import React, { useState } from 'react';
import { toast } from "react-toastify";
import requisicoesHTTP from '../API/Requisicoes';
import { Button } from '../styles/Button.styled';
import { ContainerForm, FormStyle, Title, MainStyle } from '../styles/Main.styled';
import entrega from '../assets/TakeAway.svg'
import localizacao from '../assets/localizacao(1).png'

const Rastreio = () => {
  const [user, setUser] = useState('');
  const [rastreio, setRastreio] = useState('');

  const handleRastreio = (e)=> console.log(setRastreio(e.target.value));
  const handleUser = (e)=> setUser(e.target.value);

  const handleEncontraPedido = (e)=>{
    e.preventDefault();

    requisicoesHTTP('GET', rastreio || user)
    .then((response)=>{
      if(response.ok){
        console.log('deu certo')
        return response.json()
      }

      if(response.status >= 400 || response.status < 500){
        console.log('status code > 400')

        return toast.error("Dado não encontrado, por favor, verifique a digitação.", { delay: 2000})
      }

      if(response.status >= 500 || response.status <= 599){
        return toast.error("Algo deu errado, tente novamente em instantes")
      }

    })
    .catch((error)=> {
      console.log(error);
      return toast.error("Tente novamente em instantes")
    })

    console.log('clique no btn submit')
  }
    
  return (
  <>
    <Title>É uma satisfação te ver por aqui! 
      Acompanhe a entrega de seu pedido através do código de rastreio. 
    </Title>

    <MainStyle>
      <img src={entrega} alt="" />
      <ContainerForm>
        <FormStyle>
          <label> 
            <p>CPF ou E-mail</p>
            <input 
              type="text" 
              value={user} 
              onChange={handleUser} 
            />
          </label>
          
          <span>OU *css*</span>

          <label>
            <p>Código de Rastreio</p>
            <input 
              type="text" 
              value={rastreio} 
              onChange={handleRastreio} 
            />
          </label>

          <Button 
            type="submit" 
            onClick={handleEncontraPedido}>
              Encontrar
          </Button>

        </FormStyle>
      </ContainerForm>
    </MainStyle>

    

  </>
  )
}

export default Rastreio