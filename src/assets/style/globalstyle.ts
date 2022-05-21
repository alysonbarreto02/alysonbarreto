import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #282a36;
        --background-second: #44475a;
        
        --pink: #ff79c6;
        --purple: #bd93f9;
        --green: #50fa7b;
        --yellow: #f1fa8c;
        
        --text-body: #f8f8f2;
    }

*{
    box-sizing: border-box;
    padding: 0;
    margin-top: 0;
    margin-left: 0;

    font-family: 'Roboto', sans-serif;

    list-style: none;
}

body{
    background-color: var(--background);
}

body::-webkit-scrollbar {
  width: 12px;
}

body::-webkit-scrollbar-track {
  background: #d3d3d3;        
}

body::-webkit-scrollbar-thumb {
  background-color: var(--green);
  border-radius: 20px;
}
`
