import { styled } from "styled-components";
import { FaRegHeart, FaRegFolder, FaVoteYea, FaTruck, FaStore } from "react-icons/fa";

export const TimelineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: calc(100vh - 170px); /* Altura da tela menos o espaço do header (50px) e footer (120px) */
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