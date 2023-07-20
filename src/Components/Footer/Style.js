import styled from "styled-components";

export const ContainerFooter = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00B9FF;
  height: 300px;
`;

export const DivDownload= styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  gap: 20px;
`;

export const DivApple= styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 50px;
  
`;

export const DivGoogle= styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 50px;
`;

export const ImgIcon = styled.img`
  width: 50px;
  
`;

export const ImgIconSocial = styled.img`
  width: 30px;
  height: 30px;
  
`;

export const Button = styled.button`
  font-weight: 700;
  width: 310px;
  height: 60px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: black;
    
  }
`;

export const IconsSocial = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
`;

