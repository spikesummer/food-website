import styled from "styled-components";

const red = "#ff3838";

export const Container = styled.div`
    background:#000;
    text-align: center;
    padding:2rem 9%;

`;

export const Share = styled.div`
    display: flex;
    gap:1.5rem;
    justify-content: center;
    flex-wrap: wrap;

`;

export const Credits = styled.h1`
    padding:2.5rem 1rem;
    color:#fff;
    font-weight: normal;
    font-size: 2rem;
    
    span{
        color: ${red};
    }    
`;