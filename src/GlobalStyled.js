import { createGlobalStyle } from "styled-components";

const red = "#ff3838";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Nunito', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: none; 
        border:none;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .2s linear;

        ::selection{
            background:${red};
            color:#fff;
        }
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-padding-top: 6rem;

        @media(max-width:991px){
            font-size: 55%;
        }

        @media(max-width:450px){
            font-size: 50%;
        }
    }

    body{
        background:#f7f7f7;
    }

`;