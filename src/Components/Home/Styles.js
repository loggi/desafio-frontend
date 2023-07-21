import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    background: black;
    height: calc(100vh - 100px);
    width: 100vw;
   
  
`;
    

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
  width: 380px;
  height: 450px;
  background-color: #d5e0f6;
  border-radius: 20px;
  padding-bottom: 10px;

  @media(max-width: 850px) {
        width: 300px;
    }
    
    @media(min-width: 1450px) {
        width: 500px;
    }
`;

export const Title = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const IntroText = styled.p`
  color: black;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  padding: 30px;
  max-width: 350px;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 50px;
  text-align: center;
  border: 1px solid black;
  font-size: 18px;
  background-color: transparent;
  height: 35px;
  border-radius: 8px;
  border: 2px solid #00B9FF;
  width: 40vh;
  color: black;
  outline: none;
  &::placeholder{
    color: black;
    opacity: 0.5;
    
  }
  @media(max-width: 1450px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  width: 140px;
  height: 60px;
  background-color: #00B9FF;
  color: black;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  position: absolute;
  align-self: flex-end;
  bottom: 0px;
  right: 0px;
  border-radius: 20px 0 20px 0;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
 
`;


export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
    @media(max-width: 850px) {
        width: 100vw;
        justify-content: center;
    }
`;
   

export const ContainerLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: black;
    position: relative;
    @media(max-width: 850px) {
      display: none;
  }
`;

export const ImgLogo = styled.img`
    width: 220px;

`;

export const Text = styled.p`
    font-size: 20px;
    color: white;
    
`;

export const BlueText = styled.span`
  color: #00B9FF;
`;

export const DivImg = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;
    left: 20px;
    @media(max-width: 850px) {
      display: none;
    }
`;

export const DivText = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 100px;
    margin-bottom: 150px;
    gap: 5px;
    @media(max-width: 750px) {
        display: none;
    }

`;