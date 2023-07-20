import React from 'react';
// import { useNavigate } from "react-router-dom";
import { HeaderStyle, LogoImg } from '../styles/Header.styled';
import Button from './Button';
import logoLoggi from '../assets/logo_loggi.png'

const Header = () => {
  // const navigate = useNavigate();
  return (
    <HeaderStyle>
      <LogoImg src={logoLoggi} alt="coelho azul em posição de saltar e nome loggi" />

      <Button type='button' onClick={()=> console.log('/login')}>Entrar</Button>
    </HeaderStyle>
  )
}

export default Header