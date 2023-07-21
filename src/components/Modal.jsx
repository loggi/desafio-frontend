import React from 'react';
import { Button } from '../styles/Button.styled';
import { ModalStyle, ContainerModal } from '../styles/Modal.styled'

const Modal = ({isOpen, setCloseModal, children}) => {

  if(isOpen){
  return (
  <ContainerModal>
    <ModalStyle>
      {children}
      <Button onClick={setCloseModal}>Fechar</Button>
    </ModalStyle>
  </ContainerModal>
  )}
  
  return null;
};

export default Modal;
