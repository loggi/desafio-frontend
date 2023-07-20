import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const ContainerHeader = styled.header`
    background-color: #fff;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const LogoImagem = styled.img`
    width: 100px;
    height: fit-content;
`;

export const IconMenu = styled(FaBars)`
    font-size: 30px;
    cursor: pointer;
    color: #000;

    @media (min-width: 1000px) {
    display: none;
  }
`;

export const TextHeader = styled.p`
    display: none;
    @media (min-width: 1000px) {
    display: flex;
    &:hover {
      color: #00BAF0;
      cursor: pointer;
      font-weight: 600;
    }
  }
`
export const ButtonHeader = styled.button`
    display:none; 
    @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    padding: 10px 0;
    width: 100px;
    color: #000;
    font-weight: 700;
    border: 2px solid #00BAF0; 
    background-color: #fff;
    &:hover {
      background-color:#00BAF0;
      color: #fff;
      cursor: pointer;
      font-weight: 700;
    }
  }
`;


