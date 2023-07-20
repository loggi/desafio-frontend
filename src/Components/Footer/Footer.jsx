import { ContainerFooter, Button, ImgIcon, DivDownload, DivApple, DivGoogle } from "./Style";
import IconApple from "../../Img/Apple.png";
import IconGoogle from "../../Img/PlayStore.png";

const Footer = () => {

    return(
        <ContainerFooter>
            <DivDownload>
                <DivApple>
                    <ImgIcon src={IconApple}></ImgIcon>
                    <Button>DISPONÍVEL NA APPLE STORE</Button>
                </DivApple>
                <DivGoogle>
                    <ImgIcon src={IconGoogle}></ImgIcon>
                    <Button>DISPONÍVEL NA PLAY STORE</Button>
                </DivGoogle>
            </DivDownload>
        </ContainerFooter>
    );

}

export default Footer;