import { styled } from "styled-components";

export const TrackingSection = styled.section`
  background-color: #006AF0;
  padding: 8px;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

export const TrackingImg = styled.img`
  max-width: 100%;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const TrackingCard = styled.div`
  background-color: #FFF;
  padding: 8px;
  border-radius: 20px;
`;

export const TrackingInput = styled.input`
  width: 100%;
`;

export const TrackingButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  width: 270px;
  color: #fff;
  background-color: #006AF0;
`;

export const DivInformations = styled.div`
    /* display: flex; 
    flex-direction: column; */
`;

export const ImgInformation = styled.img`
    width: 140px;
    /* display: flex; 
    flex-direction: column; */
`;

export const TitleInformation = styled.p`
  color: #006AF0;
  font-size: 18px;
  font-weight: 700;
`;

export const TextInformation = styled.p`
  color: #000;
  font-size: 15px;
`;

export const InformationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;