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
`
