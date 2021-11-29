import styled from "styled-components";


export const Box = styled.div`
    flex:1 1 30rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border:.1rem solid rgba(0,0,0,.3);
    cursor: pointer;
    border-radius: .5rem;

    :hover > img{
        top:0;
    }

    :hover div{
        transform: translateY(100%);
    }

    & > img{
        height:100%;
        width:100%;
        object-fit: cover;
        position: absolute;
        top:-100%; left:0;
    }
`;

export const Content = styled.div`
    text-align: center;
    background:#fff;
    padding:2rem;

    img{
        margin:1.5rem 0;
    }

    h3{
        font-size: 2.5rem;
        color:#333;
    }

    p{
        font-size: 1.6rem;
        color:#666;
        padding:1rem 0;
    }
`;