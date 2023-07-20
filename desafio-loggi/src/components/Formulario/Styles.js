import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 380px;
    height: 500px;
    background-color: #006AF0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 13px;
    justify-content: center;
    gap: 15px;
    box-shadow: 5px 5px 10px rgb(25, 25, 25), -5px -5px 10px rgb(60, 60, 60);
`;

export const StyledForm = styled.form`
    text-align: center;
    flex-direction: column;
`;

export const StyledLabel = styled.label`
    text-align: center;
    flex-direction: column;
    display: flex;
    color:  #ffff;
`;

export const StyledInput = styled.input`
    text-align: center;
    flex-direction: column;
    display: flex;
    width: 370px;
    background: transparent;
    border-style:none;
    border-bottom: 2px solid #ffff;
    outline: none;
    color:  #ffff;
`;



export const StyledH2 = styled.h2`
   justify-content: flex-start;
    flex-direction: column;
    display: flex;
    color:  #ffff;
`;

export const StyledP = styled.p
    `
    color:  #ffff;
    font-size: 18px;
`;


export const StyledDivTexto = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 2rem;
`;