import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #FFFFFF;
    height: 100px;
    width: 100vw;
    
`;

export const Logo = styled.img`
    width: 100px;
`;

export const HamburgerIcon = styled.img`
    width: 40px;
    display: none;
    @media(max-width: 850px) {
        display: block;
    }
`;

export const Paragrafo = styled.button`
    font-size: 15px;
    width: 320px;
    display: block;
    border: none;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        color: #00B9FF;
    }
    @media(max-width: 850px) {
        display: none;
    }
`;

export const BlueText = styled.p`
  color: #00B9FF;
  display: block;
  font-weight: 700;
  @media(max-width: 850px) {
    display: none;
  }
`;

export const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    border: 2px solid #00B9FF;
    border-radius: 5px;
    cursor: pointer;
    &.hidden{
        display: none;
    }

    @media(max-width: 850px) {
        display: none;
    }
`;


