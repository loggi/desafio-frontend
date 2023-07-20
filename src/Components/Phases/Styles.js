import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const ContainerPhases = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    div{
        
        &.circle{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: black ;
            display: flex;
            align-items: center;
            justify-content: center;
            @media(max-width: 850px) {
                width: 70px;
                height: 70px;
            }
            @media(max-width: 550px) {
                width: 40px;
                height: 40px;
                
            }
            img{
                @media(max-width: 550px) {
                width: 15px;
            }
            }
    
        }
        &.line{
            height: 5px;
            width: 100px;
            background-color: black;
            @media(max-width: 850px) {
                width: 70px;
                height: 3px;
            }
            @media(max-width: 550px) {
                width: 20px;
                height: 3px;
            }
        
        }
    }
    
`;


export const SectionTable = styled.section`
    table{
        width: 60vw;
        color: black;
        border-color: black;
        border-radius: 10px;
        border-collapse: collapse;
        margin: auto;
    }
    td{
        height: 35px;
        text-align: center;
        @media(max-width: 550px) {
            font-size: 11px;
        }
    }
    th{
        height: 35px;
        text-align: center;
    }

   

`;

