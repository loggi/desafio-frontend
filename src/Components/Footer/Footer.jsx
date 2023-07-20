import { ContainerFooter, Button, ImgIcon, DivDownload, DivApple, DivGoogle, IconsSocial, ImgIconSocial } from "./Style";
import IconApple from "../../Img/Apple.png";
import IconGoogle from "../../Img/PlayStore.png";
import AppleIconSocial from "../../Img/appleicon.png";
import Linkedin from "../../Img/linkedin.png";
import YoutubeIcon from "../../Img/youtube.png";
import TwitterIcon from "../../Img/twitter.png";


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
                    <Button onClick={openAppleStore}>DISPONÍVEL NA APPLE STORE</Button>
                </DivApple>
                <DivGoogle>
                    <ImgIcon src={IconGoogle}></ImgIcon>
                    <Button onClick={openGooglePlay}>DISPONÍVEL NA PLAY STORE</Button>
                </DivGoogle>
            </DivDownload>
            <IconsSocial>
                <ImgIconSocial src={AppleIconSocial}></ImgIconSocial>
                <ImgIconSocial src={Linkedin}></ImgIconSocial>
                <ImgIconSocial src={YoutubeIcon}></ImgIconSocial>
                <ImgIconSocial src={TwitterIcon}></ImgIconSocial>
            </IconsSocial>
            
        </ContainerFooter>
    );

}

export default Footer;