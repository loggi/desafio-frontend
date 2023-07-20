import { ContainerFooter, Button, ImgIcon, DivDownload, DivApple, DivGoogle } from "./Style";
import IconApple from "../../Img/Apple.png";
import IconGoogle from "../../Img/PlayStore.png";
import { useNavigate } from 'react-router-dom';




const Footer = () => {

    const appleStoreURL = "https://apps.apple.com/br/app/loggi-entregas-expressas/id879157764";
    const googlePlayURL = "https://play.google.com/store/apps/details?id=com.loggi.client";

    const openAppleStore = () => {
        window.open(appleStoreURL, "_blank");
    };

    const openGooglePlay = () => {
        window.open(googlePlayURL, "_blank");
    };

    return(
        <ContainerFooter>
            <DivDownload>
                <DivApple>
                    <ImgIcon src={IconApple}></ImgIcon>
                    <Button onClick={openGooglePlay}>DISPONÍVEL NA APPLE STORE</Button>
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