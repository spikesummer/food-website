import styled from 'styled-components';

const red = "#ff3838";

export const Box = styled.div`
    padding:2rem;
    background:#fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border:.1rem solid rgba(0,0,0,.3);
    border-radius: .5rem;
    text-align: center;
    flex:1 1 30rem;
    position: relative;

    img{
        height:25rem;
        object-fit: cover;
        width:100%;
        border-radius: .5rem;
    }

    .price{
        position: absolute;
        top:3rem; left:3rem;
        background: ${red};
        color:#fff;
        font-size: 2rem;
        padding:.5rem 1rem;
        border-radius: .5rem;
    }

    h3{
        color:#333;
        font-size: 2.5rem;
        padding-top: 1rem;
    }

    .stars i{
        color:gold;
        font-size: 1.7rem;
        padding:1rem .1rem;
    }
`;