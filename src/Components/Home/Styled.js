import { styled } from "styled-components";

export const TrackingSection = styled.section`
  background-color: #006AF0;
  padding: 8px;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 1400px) {
    height: 602px;
  }
`;

export const TrackingImg = styled.img`
  width: 380px;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
  @media (min-width: 1400px) {
    width: 500px;
  }
`;

export const TrackingCard = styled.div`
  background-color: #FFF;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    width: 400px;
    height: 300px;
  }
  @media (min-width: 1400px) {
    width: 415px;
    height: 350px;
}
`;

export const TrackingInput = styled.input`
  width: 290px;
  height: 25px;
  margin-bottom: 8px;
  border: 1px solid #000;
  transition: border-color 0.3s; 

  &:focus {
    border-color: #006AF0; /* Bordas azuis ao clicar/focar */
    outline: none; /* Remover o contorno padrão do input no Chrome */
    box-shadow: 0 0 3px rgba(0, 106, 240, 0.5); /* Opcional: Adicionar sombra suave ao clicar */
  }
`;

export const TrackingButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  width: 200px;
  color: #fff;
  font-weight: 700;
  background-color: #006AF0;
  @media (min-width: 1400px) {
  margin-top: 10px;
}
`;

export const DivInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImgInformation = styled.img`
    width: 140px;
`;

export const TitleInformation = styled.p`
  color: #006AF0;
  font-size: 18px;
  font-weight: 700;
`;

export const TextInformation = styled.p`
  color: #000;
  padding: 8px;
  font-size: 15px;
  text-align: justify; 

  @media (min-width: 1000px) {
     padding: 20px;
  }
`;

export const InformationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 1000px) {
      flex-direction: row; 
  }
`;

export const TitleCard = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 1400px) {
    font-size: 24px;
}
`;

export const TextCard = styled.p`
  font-size: 15px;
`;

export const ImgPackage = styled.img`
  width: 80px;
  @media (min-width: 1400px) {
  width: 90px;
}
`

export const ImgInformationTwo = styled.img`
    width: 180px;
`;