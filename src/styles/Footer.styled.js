import styled from 'styled-components';

export const FooterStyle = styled.footer`

  h5{
    font-family: monospace;
    margin: 0.5rem;;
    }

`
export const FooterUl = styled.ul`
  display: flex;
  place-items: center;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: auto;
    li{
      text-align: center;
      list-style-type: none;
        img{
          width: 2.5rem;
          border-radius: 16px;
        } 
    }
`