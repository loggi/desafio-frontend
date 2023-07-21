import React, { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import requisicoesHTTP from '../API/Requisicoes';
import { Button } from '../styles/Button.styled';
import { ContainerForm, FormStyle, Title, MainStyle } from '../styles/Main.styled';
import entrega from '../assets/TakeAway.svg';
import Modal from '../components/Modal';

const Rastreio = () => {
  const [user, setUser] = useState('');
  const [rastreio, setRastreio] = useState('');
  const [info, setInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const inputEl = useRef(null);
  
  const handleEncontraPedido = async (e)=>{
    e.preventDefault();

    if(rastreio === '' || user === ''){
      // toast.error("Preencha pelo menos um dos campos.")
      inputEl.current.focus();
    }

    await requisicoesHTTP('GET', rastreio || user)
    .then((response) => {
      console.log(response)
      console.log(response)
      return setInfo(response)
    
    })
    .catch((error)=> {
      console.log(error);
      // toast.error("Algo deu errado, tente novamente em instantes")
      return
    });

    setRastreio('');
    setUser('');
    setOpenModal(true);
  };

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
              onChange={(e)=> setUser(e.target.value)} 
              required
              ref={inputEl}
            />
          </label>
          
          <span>Ou</span>

          <label>
            <p>Código de Rastreio</p>
            <input 
              type="text" 
              value={rastreio} 
              onChange={(e)=> setRastreio(e.target.value)} 
              required
              ref={inputEl}
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
  
    <Modal isOpen={openModal} setCloseModal={()=> setOpenModal(!openModal)}>
      <>
      <div >
        <h3>Olá, {info.mensageiro}!</h3>
        <p>Seu pedido da {info.cliente}, realizado no dia {info.dataPedido}, tem entrega prevista para {info.dataPrevistaEntrega}. <br/>
        Neste momento o pedido está {info.status}
        </p>
        <p><span>Situação: {info.descricao}</span></p>
        <p><span>Data do pedido: {info.dataPedido}</span></p>
        <p><span>Previsão de entrega: {info.dataPrevistaEntrega}</span> </p>
        <p><span>Remetente: {info.cliente}</span></p>
      </div>
      </>
    </Modal>

    {info.id === undefined && 
      <Modal isOpen={openModal} setCloseModal={()=> setOpenModal(!openModal)}>
        <h2>Pedido não encontrado, por favor, verifique a digitação.</h2>
      </Modal>
    }
      
  </>
  )
}

export default Rastreio
