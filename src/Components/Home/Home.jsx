import { 
    ContainerHome, 
    FormContainer, 
    Title, 
    Input,
    IntroText, 
    Form, 
    SubmitButton,
    ContainerRight,
    ContainerLeft, 
    ImgLogo, 
    BlueText, 
    DivText, 
    Text,
    DivImg } from "./Styles";
import IconRabbit from "../../Img/LogoLoggi2.png";
import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import data from '../../data.json';
import { setItens } from "../../LocalStorage";

const Home= () => {

    const searchValue = useRef();
    const navigate = useNavigate();
    
    const sendToFollowUp = (e) => {
        e.preventDefault();
        const codeValue = searchValue.current.value;
        const findValue = data.pedidos.find((item) => item.id === codeValue)
        console.log(findValue)
        if(findValue){
            setItens(findValue.id);
            navigate("/FollowUp");
        } else {
            alert('Código de rastreio incorreto!')
        }
        
    };

    return(
        <ContainerHome>
            <ContainerLeft>
                <DivText>
                    <Text>VOCÊ E SUA</Text>
                    <Text>EMPRESA PODEM</Text>
                    <Text>FAZER <BlueText>ENVIOS</BlueText> PARA</Text>
                    <Text>TODO O BRASIL</Text>
                </DivText>
                <DivImg>
                    <ImgLogo src={IconRabbit}></ImgLogo>
                </DivImg>
            </ContainerLeft>
            <ContainerRight>
                <FormContainer>
                    <Title>ACOMPANHAR PEDIDO</Title>
                    
                    <IntroText>OLÁ! ACOMPANHE COM A LOGGI O SEU PEDIDO! INSIRA O CÓDIGO DE RASTREIO ABAIXO.</IntroText>
                    
                    <Form >
                        <Input
                        type="text"
                        placeholder="digite o código de rastreio"
                        ref={searchValue}/>
                        <SubmitButton type="submit" onClick={sendToFollowUp}>RASTREAR</SubmitButton>
                    </Form>
                </FormContainer>
            </ContainerRight>
        </ContainerHome>
    );
}

export default Home;