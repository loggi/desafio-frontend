import React, { useState } from 'react';
import { Button } from '../styles/Button.styled';
import { ContainerForm, FormStyle, Title, MainStyle } from '../styles/Main.styled';
import entrega from '../assets/TakeAway.svg'
import localizacao from '../assets/localizacao(1).png'

const Rastreio = () => {
  const [user, setUser] = useState('');
  const [rastreio, setRastreio] = useState('');

  const handleRastreio = (e)=> setRastreio(e.target.value);
  const handleUser = (e)=> setUser(e.target.value);

  const handleEncontraPedido = ()=>{
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
            <input type="text" value={user}  />
          </label>

          <label>
            <p>Código de Rastreio</p>
            <input type="text" value={rastreio}/>
          </label>

          <Button type="submit" onClick={handleEncontraPedido}>Encontrar</Button>
        </FormStyle>
      </ContainerForm>
    </MainStyle>

  </>
  )
}

export default Rastreio