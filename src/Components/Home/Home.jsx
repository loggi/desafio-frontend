import { TrackingSection, TrackingImg, TrackingInput, TrackingCard, TrackingButton, ImgInformation, ImgInformationTwo, InformationSection, DivInformations, TitleInformation, TextInformation, TextCard, TitleCard, ImgPackage } from "./Styled";
import InformationOneImg from "../../Imagens/InformationOne.png";
import InformationTwoImg from "../../Imagens/InformationTwo.png";
import InformationThreeImg from "../../Imagens/InformationThree.png";
import IconHomeInformation from "../../Imagens/iconHome.png"; 
import Package from "../../Imagens/Package.png"; 

function Home() {
  return (
    <>
      <TrackingSection>
        <TrackingCard>
          <TitleCard>Olá!</TitleCard>
          <br />
          <TitleCard>Acompanhe com a Loggi o status da entrega do seu pedido.</TitleCard>
          <br />
          <ImgPackage src={Package}/>
          <TextCard>Primeiro, digite o código de rastreamento.</TextCard>
          <TrackingInput />
          <TrackingButton>ACOMPANHAR PEDIDO</TrackingButton>
        </TrackingCard>
        <TrackingImg src={IconHomeInformation}/>
      </TrackingSection>
        <InformationSection>
          <DivInformations>
            <ImgInformation src={InformationOneImg} alt="image search"></ImgInformation>
            <TitleInformation>Rastreie suas encomendas com a Loggi</TitleInformation>
            <TextInformation>Utilize a plataforma de rastreamento da Loggi para encontrar e acompanhar suas encomendas. 
            Basta inserir o código de rastreamento no campo de busca e desfrutar da melhor experiência.</TextInformation>
          </DivInformations>
          <DivInformations>
            <ImgInformationTwo src={InformationTwoImg} alt="track delivery"></ImgInformationTwo>
            <TitleInformation>Acompanhe a entrega</TitleInformation>
            <TextInformation>Acompanhe suas encomendas com a Loggi, de qualquer lugar. De porta a porta, nós entregamos,
            e você acompanha todo o processo pela plataforma ou via SMS.</TextInformation>
          </DivInformations>
          <DivInformations>
            <ImgInformation src={InformationThreeImg} alt="No delay to deliver"></ImgInformation>
            <TitleInformation>Sem demora para entregar seus pacotes</TitleInformation>
            <TextInformation>A Loggi oferece entrega rápida e eficiente em todo o Brasil, sem demora. Conte conosco para
            receber seus pacotes com agilidade e segurança, tornando sua logística mais simples e conveniente</TextInformation>
          </DivInformations>
      </InformationSection>
    </> 
  );
}

export default Home;
