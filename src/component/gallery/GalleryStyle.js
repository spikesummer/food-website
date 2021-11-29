import styled from "styled-components";

export const Box = styled.div`
    height:25rem;
    flex:1 1 30rem;
    border:1rem solid #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: .5rem;
    position: relative;
    overflow: hidden;

    :hover div{
        top: 0;
    }
    
    img{
        height:100%;
        width:100%;
        object-fit: cover;
    }

`;

export const Content = styled.div`
    position: absolute;
    top:-100%; left:0;
    height: 100%;
    width:100%;
    background:rgba(255,255,255,.9);
    padding:2rem;
    padding-top: 5rem;
    text-align: center;

    h3{
        font-size: 2.5rem;
        color:#333;
    }

    p{
        font-size: 1.5rem;
        color:#666;
        padding:1rem 0;
    }
`;