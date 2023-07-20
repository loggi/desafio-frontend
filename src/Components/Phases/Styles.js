import styled from "styled-components";

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
            /* &::after{
                content: "Remessa Criada";
                color: white;
                position: absolute;
                bottom: -20px;
            } */
        }
        &.line{
            height: 5px;
            width: 100px;
            background-color: black;
        }
    }
    
`;

