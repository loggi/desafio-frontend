import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackButton = styled.button`
    background-color: #006AF0; 
    color: #fff; 
    font-weight: 700;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    padding: 10px 0;
    width: 100px;
    border: none;
    margin-bottom: 10px;
    margin-top: 40px;
    margin-left: 8px;
    @media (min-width: 1000px) {
    margin-top: 0;
  }
`; 

export const StyledLink = styled(Link)`
text-decoration: none;
`;