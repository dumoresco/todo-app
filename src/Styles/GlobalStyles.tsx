import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    margin: 0;
    padding: 0;
    box-sizing: border-box;



    body{
        width: 100vw;
        height: 100vh;
        background-color: #181824;
        overflow: hidden;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center
 
    }

    input, button, ::placeholder{ 
        font-family: 'Josefin Sans', sans-serif;
        background: none;
        border: none;
        outline: none;
    }
    button{
        cursor: pointer;
    }
    li{
        list-style-type: none;
    }


`;
