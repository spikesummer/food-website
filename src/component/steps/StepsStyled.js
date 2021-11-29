import styled from 'styled-components';

export const StepSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    padding:1rem;
`;

export const Box = styled.div`

    flex:1 1 25rem;
    padding:1rem;
    text-align: center;

    img{
        border-radius: 50%;
        border:1rem solid #fff;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    }

    h3{
        font-size: 3rem;
        color:#333;
        padding:1rem;
    }
`;