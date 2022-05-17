import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.root {
    --green-light: #C8DE4E;
    --blue-500: #4AB5E0;
    --blue-600: #25A6DB;
    --white: #ffffff;
    --black: #000;

    --template: #2C2542;
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
    background-color: #161616;
}
`
