import styled from "styled-components";

const red = "#ff3838";

export const Box = styled.div`
    text-align: center;
    padding:2rem;
    border:1rem solid #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    border-radius: .5rem;
    flex:1 1 30rem;
    background:#333;
    margin-top: 6rem;

    img{
        height: 12rem;
        width:12rem;
        border-radius: 50%;
        border:1rem solid #fff;
        margin-top: -8rem;
        object-fit: cover;
    }

    h3{
        font-size: 2.5rem;
        color:#fff;
        padding:.5rem 0;
    }

    .stars i{
        font-size: 2rem;
        color: ${red};
        padding:.5rem 0;
    }

    p{
        font-size: 1.5rem;
        color:#eee;
        padding:1rem 0;
    }
`;