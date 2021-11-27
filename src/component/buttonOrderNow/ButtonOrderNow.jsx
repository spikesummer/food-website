import React from 'react';
import styled from 'styled-components';

const red = "#ff3838";

const Button = styled.button`
    display: inline-block;
    padding:.8rem 3rem;
    border:.2rem solid ${red};
    color: ${red};
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
    z-index: 0;
    margin-top: 1rem;

    ::before{
        content: '';
        position: absolute;
        top:0; right: 0;
        width:0%;
        height:100%;
        background: ${red};
        transition: .3s linear;
        z-index: -1;
    }

    :hover::before{
        width:100%;
        left: 0;
    }

    :hover{
        color:#fff;
    }
`;

export const ButtonOrderNow = (props)=>{

return(
    <Button as="a" href="#">{props.text}</Button>
);
}