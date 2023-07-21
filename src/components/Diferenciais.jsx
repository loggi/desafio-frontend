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
            <img src={ampulheta} alt="desenho de ampulheta azulada" />
            <p> a entrega mais rápida do Brasil </p>
          </li>
          <li>
            <img src={dinheiro} alt="saco volumoso fechado com símbolo do cifrão" />
            <p> melhor custo benefício </p>
          </li>
          <li>
            <img src={conforto} alt="desenho entregador se debruçando na janela com caixa na mão e mulher sentada inclinando o corpo para frente, quase de frente para ele, fazendo menção a pegar a caixa" />
            <p> entregue no conforto de seu lar </p>
          </li>
        </ul>
      </DiferenciaisStyle>
    </ContainerDiferenciais>
  )
}

export default Diferenciais
