import { FooterComponent, FooterDivRedes, FooterDivQrCode, IconGoogleStore, IconPlayStore, TextFooter, IconFacebook, IconInstagram, IconTwitter, IconYoutube } from "./Styled";

function Footer() {
  return <FooterComponent>
    <FooterDivRedes>
      <TextFooter>Siga-nos</TextFooter>
      <IconFacebook/>
      <IconInstagram/>
      <IconTwitter/>
      <IconYoutube/>
    </FooterDivRedes>
    <FooterDivQrCode>
      <TextFooter>Baixe nosso aplicativo</TextFooter>
      <IconGoogleStore/>
      <IconPlayStore/>
    </FooterDivQrCode>
  </FooterComponent>;
}

export default Footer;