import { styled } from "styled-components";
import { FaRegHeart, FaRegFolder, FaVoteYea, FaTruck, FaStore } from "react-icons/fa";

export const TimelineContainer = styled.div`
    position: relative;

    @media (min-width: 1000px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      min-height: calc(100vh - 355px); // Altura da tela menos o espaço do header (50px) e footer (120px)
    }
  `;
  
export const TimelineStep = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70px;
    height: 70px;
    border: 2px solid #006AF0;
    background-color: #006AF0;
    border-radius: 50%;
    margin-left: 8px;
    margin-right: 8px;
  `;
  
export const TimelineLine = styled.hr`
    position: absolute;
    top: 50%;
    left: 25px;
    right: 25px;
    border: 1px solid #006AF0;
    z-index: -1;
  `;

export const IconCreated = styled(FaRegFolder)`
  font-size: 30px;
  cursor: pointer;
  color: #000;
`

export const IconSent = styled(FaVoteYea)`
  font-size: 30px;
  cursor: pointer;
  color: #000;
`

export const IconDelivered = styled(FaRegHeart)`
  font-size: 30px;
  cursor: pointer;
  color: #000;
`

export const IconTruck = styled(FaTruck)`
  font-size: 30px;
  cursor: pointer;
  color: #000;
`

export const IconStore = styled(FaStore)`
  font-size: 30px;
  cursor: pointer;
  color: #000;
`

export const TitleStatus = styled.p`
  color: #006AF0;
  font-size: 18px;
  font-weight: 700;
`;

export const Content = styled.div`
  width: 100%; 
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70px;
  height: 70px;
  border: 2px solid #006AF0;
  background-color: #006AF0;
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
  position: relativo;

  @media (max-width: 999px) {
    &::after { 
      content: '';
      width: 136%;
      height: 1px;
      position: absolute;
      left: 70px;
      border-bottom: 2px solid #006AF0;
    }
    &::before { 
      content: '';
      width: 136%;
      height: 1px;
      position: absolute;
      right: 70px;
      border-bottom: 2px solid #006AF0;
    }
  }
  @media (min-width: 2000px) {
    &::after,
    &::before {
      width: 250%;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`; 

export const TitleOrder = styled.p`
  color: #000;
  font-size: 22px;
  font-weight: 500;
  margin: 8px;
  display: flex;
  justify-content: flex-end;
`;

export const TextStatus = styled.p`
  margin-bottom: 8px;
  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

export const Line = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #006AF0;
    position: absolute;
    top: calc(50% - 26px);
  }
`
