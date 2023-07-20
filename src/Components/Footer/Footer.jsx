import { styled } from "styled-components";

function Footer() {
  return <FooterComponent>Footer</FooterComponent>;
}

const FooterComponent = styled.footer`
  height: 120px;
  background-color: #006AF0;
  display: flex;
  align-items:flex-end;
`;

export default Footer;
