import { styled } from "styled-components";
import {
  FaGooglePlay,
  FaApple,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube
} from "react-icons/fa";

export const FooterComponent = styled.footer`
  height: 120px;
  background-color: #006AF0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterDivRedes = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px;
`; 

export const FooterDivQrCode = styled.div`
 color: #fff;
 display: flex;
 gap: 10px;
 flex-direction: column;
 align-items: center;
 padding: 8px;
`;

export const IconGoogleStore = styled(FaGooglePlay)`
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  &:hover {
      color: #000;
      cursor: pointer;
    }
`;

export const IconPlayStore = styled(FaApple)`
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  &:hover {
      color: #000;
      cursor: pointer;
    }
`;

export const TextFooter = styled.p`
  font-size: 14px;
`; 

export const IconFacebook = styled(FaFacebookSquare)`
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
      color: #000;
      cursor: pointer;
    }
`;

export const IconInstagram = styled(FaInstagram)`
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
      color: #000;
      cursor: pointer;
    }
`;

export const IconTwitter = styled(FaTwitterSquare)`
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
      color: #000;
      cursor: pointer;
    }
`;

export const IconYoutube = styled(FaYoutube)`
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
      color: #000;
      cursor: pointer;
    }
`;
