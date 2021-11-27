import React from 'react';
import styled from 'styled-components';

const red = "#ff3838";

const Container = styled.h1`

`;

export const Heading = (props)=>{

    return(
        <h1>
            {props.textBefore}
            <span>
                {props.span}
            </span>
            {props.textAfter}
        </h1>
    );
}