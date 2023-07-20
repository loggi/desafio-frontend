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
import IconRabbit from "../../Img/LogoLoggi2.png"

const Home= () => {

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
                    <Title>ACOMPANHE SEU PEDIDO</Title>
                    
                    <IntroText>PRIMEIRO, DIGITE SEU </IntroText>
                    <IntroText>SEU CÓDIGO DE RASTREAMENTO</IntroText>
                    
                    <Form>
                        <Input
                        type="text"
                        placeholder="Digite o código de rastreio"
                        />
                        <SubmitButton type="submit">RASTREAR</SubmitButton>
                    </Form>
                </FormContainer>
            </ContainerRight>
        </ContainerHome>
    );
}

export default Home;