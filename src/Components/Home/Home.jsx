import { ContainerHome, Text, DivForm, ImgLogo, ContainerLeft, ContainerRight, DivText, DivImg } from "./Styles";
import IconRabbit from "../../Img/LogoLoggi2.png"

const Home= () => {

    return(
        <ContainerHome>
            <ContainerLeft>
                <DivText>
                    <Text>VOCÊ E SUA</Text>
                    <Text>EMPRESA PODEM</Text>
                    <Text>FAZER ENVIOS PARA</Text>
                    <Text>TODO O BRASIL</Text>
                </DivText>
                <DivImg>
                    <ImgLogo src={IconRabbit}></ImgLogo>
                </DivImg>
            </ContainerLeft>
            <ContainerRight>
                <DivForm>

                </DivForm>
            </ContainerRight>
        </ContainerHome>
    );
}

export default Home;