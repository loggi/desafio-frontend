import { styled } from "styled-components";

export const ContainerDiferenciais = styled.div`
  background-color: #FFFFFF ;
  border: 2px solid #003B99;
  border-radius: 8px;
  max-width: 85%;
  margin: 0 auto 1.5rem;
  box-shadow: .2rem .2rem .2rem lightgray, -.1rem -.1rem .2rem lightgray;

`
export const DiferenciaisStyle = styled.div`
  background-color: #E6F8FF;
  border-radius: 8px;
  width: 90%;
  margin: auto;
  ul{
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    padding: .3rem;
    place-items: baseline;
      li{
        width: 60%;
        height: 80%;
        padding: .2rem;
          p{
            text-align: center;
            font-size: small;
            text-transform: capitalize;
          }
      }
  }
`
