import { TrackingSection, TrackingImg, TrackingInput, TrackingCard, TrackingButton, ImgInformation, InformationSection, DivInformations, TitleInformation, TextInformation } from "./Styled";
import InformationOneImg from "../../Imagens/InformationOne.png";
import InformationTwoImg from "../../Imagens/InformationTwo.png";
import InformationThreeImg from "../../Imagens/InformationThree.png";

function Home() {
  return (
    <>
      <TrackingSection>
        <TrackingImg src="https://w7.pngwing.com/pngs/824/276/png-transparent-computer-icons-job-job-hire-hand-sticker-cartoon.png" />
        <TrackingCard>
          <p>Olá!</p>
          <br />
          <p>Acompanhe com a Loggi o status da entrega do seu pedido.</p>
          <br />
          <p>Primeiro, digite o código de rastreamento.</p>
          <TrackingInput />
          <TrackingButton>Acompanhar Pedido</TrackingButton>
        </TrackingCard>
      </TrackingSection>
        <InformationSection>
          <DivInformations>
            <ImgInformation src={InformationOneImg} alt="image search"></ImgInformation>
            <TitleInformation>Rastreie suas encomendas com a Loggi</TitleInformation>
            <TextInformation>Utilize a plataforma de rastreamento da Loggi para encontrar e acompanhar suas encomendas.
             Basta inserir o código de rastreamento no campo de busca e desfrutar da melhor experiência.</TextInformation>
          </DivInformations>
          <DivInformations>
            <ImgInformation src={InformationTwoImg} alt="track delivery"></ImgInformation>
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
