import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const DivError = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ImgError = styled.img`
width: 85%;
padding: 10px;
@media (min-width: 725px) {
width: 82%;
}
@media (min-width: 825px) {
width: 67%;
}
@media (min-width: 985px) {
width: 600px;
}
`

export const TittleError = styled.p`
font-size: 20px;
color: #006AF0;
font-weight: 700;
display: flex;
justify-content: center;
padding: 10px;
`

export const TextError = styled.p`
    font-size: 14px;
    text-align: justify;
    padding: 10px;
`

export const ButtonError = styled.button`
background-color: #006AF0; 
color: #fff; 
font-size: 32px; 
font-weight: 700;
display: flex;
justify-content: center;
border-radius: 10px;
padding: 10px 0;
width: 345px;
border: none;
margin-top: 12px;
text-decoration: none;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
@media (min-width: 825px) {
font-size: 28px;
width: 320px;
padding: 7px 0;
}
`

export const StyledLink = styled(Link)`
text-decoration: none;
`  