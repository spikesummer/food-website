import React from 'react';
import styled from 'styled-components';

const red = "#ff3838";

const Container = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    padding:1rem;
    color:#666;

    span{
        color: ${red};
    }
`;

export const Heading = (props)=>{

    return(
        <Container>
            {props.textBefore}
            <span>
                {` ${props.span} `}
            </span>
            {props.textAfter}
        </Container>
    );
}