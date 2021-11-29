import styled from "styled-components";
import { ButtonOrderNow } from "../buttonOrderNow/ButtonOrderNow";

const red = "#ff3838";

export const Row = styled.div`
    padding:2rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    background:#fff;
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    border-radius: .5rem;
`;

export const Image = styled.div`
    flex:1 1 30rem;

    img{
        height: 100%;
        width:100%;
        object-fit: cover;
        border-radius: .5rem;
    }
`;

export const Form = styled.form`
    flex:1 1 50rem;
    padding:1rem;

    textarea{
        padding:1rem;
        margin:1rem 0;
        font-size: 1.7rem;
        color:#333;
        text-transform: none;
        border:.1rem solid rgba(0,0,0,.3);
        border-radius: .5rem;
        width:100%;
        height:15rem;
        resize: none;
    }
`;

export const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    input{
        padding:1rem;
        margin:1rem 0;
        font-size: 1.7rem;
        color:#333;
        text-transform: none;
        border:.1rem solid rgba(0,0,0,.3);
        border-radius: .5rem;
        width:49%;
    }

    @media(max-width:450px){
        input{
            width:100%;
        }
    }
`;

export const Button = styled(ButtonOrderNow)`
    background:none;

    :hover{
        background:${red};
    }
`;