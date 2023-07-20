import styled from "styled-components";

export const ContainerHome = styled.header`
    display: flex;
    align-items: center;
    background: black;
    height: 100vh;
    width: 100vw;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
  width: 380px;
  height: 400px;
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
  font-weight: 700;
  margin-top: 10px;
`;

export const IntroText = styled.p`
  color: black;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
 
  text-align: center;
  border: 1px solid black;
  font-size: 16px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  width: 30vh;
  color: black;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  width: 140px;
  height: 60px;
  background-color: #007bff;
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
 
`;


export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
   

   
`;

export const ContainerLeft = styled.div`
     width: 50%;
     background-color: black;
     @media(max-width: 850px) {
        display: none;
    }
`;

export const ImgLogo = styled.img`
    width: 200px;
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

    @media(max-width: 850px) {
        display: none;
    }
`;

export const DivText = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 100px;
    margin-bottom: 150px;
    gap: 5px;
    @media(max-width: 750px) {
        display: none;
    }

`;