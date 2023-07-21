import React from 'react';
import dinheiro from '../assets/Money.svg'
import ampulheta from '../assets/sand-clock.svg'
import conforto from '../assets/em-casa.svg'
import { ContainerDiferenciais, DiferenciaisStyle } from '../styles/Diferenciais.styled';

const Diferenciais = () => {
  return (
    <ContainerDiferenciais>
      <DiferenciaisStyle>
        <ul>
          <li>
            <img src={ampulheta} alt="" />
            <p> a entrega mais rápida do Brasil </p>
          </li>
          <li>
            <img src={dinheiro} alt="" />
            <p> melhor custo benefício </p>
          </li>
          <li>
            <img src={conforto} alt="" />
            <p> entregue no conforto de seu lar </p>
          </li>
        </ul>
      </DiferenciaisStyle>
    </ContainerDiferenciais>
  )
}

export default Diferenciais
