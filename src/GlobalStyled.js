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
    }

    ::selection{
        background:${red};
        color:#fff;
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-padding-top: 6rem;
    }

    body{
        background:#f7f7f7;
    }

    section{
        padding: 2rem 9%;
    }
    
    @media(max-width:991px){

        html{
        font-size: 55%;
        }
        
        header{
            padding:2rem;
        }

        section{
            padding:2rem;
        }
    }
`