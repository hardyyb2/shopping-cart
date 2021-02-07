import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  @font-face {
    font-family: Righteous;
    src: url('../assets/fonts/Righteous-Regular.woff');
  }
 
  @font-face {
    font-family: Raleway;
    src: url('../assets/fonts/Raleway-Regular.woff');
  }
 
  :root {
      --primary-font: Raleway;
      --secondary-font: Righteous; 
      --number-font : sans-serif;
  }

  body {
    font-family: var(--primary-font), -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Typography;
