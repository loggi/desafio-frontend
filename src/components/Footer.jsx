import React from 'react';
import { FooterStyle, FooterUl } from '../styles/Footer.styled.js';
import github from '../assets/github1.png'
import linkedin from '../assets/image_13.png'
import youtube from '../assets/image_15.png'
import instagram from '../assets/instagram.jpg'

const Footer = () => {
  return (
    <FooterStyle>
      <FooterUl>
        <li>
          <img src={linkedin} alt="" />
          <p>LinkedIn</p>
        </li>
        <li>
          <img src={github} alt="" />
          <p>GitHub</p>
        </li>
      
        <li>
          <img src={youtube} alt="" />
          <p>Youtube</p>
        </li>
        
      </FooterUl>
      <hr />
      <h5>Desenvolvido por <a to='https://github.com/Geice-Sousa'>
        Geice Sousa</a>, 2023.
        </h5>
    </FooterStyle>
  )
}

export default Footer
