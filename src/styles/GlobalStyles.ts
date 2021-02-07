import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #44A7FD;
        --size: 8px;
        --default-dimension: 50px;
        --default-button-background : rgba(255, 255, 255, 1);
        --default-button-color: var(--blue);
        --default-button-border: var(--size);
    }
	
    * {
        -webkit-tap-highlight-color: transparent;  
    }

    body {
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
    }
	  
    ::-webkit-scrollbar {
	    width: 4px;
    }
  
    ::-webkit-scrollbar-track {
	    border-radius: 10px;
	}
	  
	::-webkit-scrollbar-thumb {
	    border-radius: 10px;
	    background: var(--blue);
	}  
`;

export default GlobalStyles;
