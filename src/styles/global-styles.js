import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    // Para fazer o rem legal 1rem = 10px
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
