import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Quicksand', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

