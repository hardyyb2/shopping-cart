import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #44A7FD;
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
	    width: 0px;
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
