import styled from 'styled-components'

const red = "#ff3838";

export const Container = styled.div`
    position: fixed;
    top:0; left: 0; right:0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#fff;
    padding:2rem 9%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);

    @media(max-width:991px){
        padding:2rem;
    }

`;

export const Logo = styled.a`
    font-size: 2.5rem;
    font-weight: bolder;
    color:#666;

    i{
        padding-right: .5rem;
        color: ${red};
    }
`;

export const MenuBar = styled.div`
    font-size: 3rem;
    cursor: pointer;
    color:#666;
    border:.1rem solid #666;
    border-radius: .3rem;
    padding:.5rem 1.5rem;
    display: none;

    @media(max-width:768px){
        display: initial;
    }
`;

export const NavBar = styled.nav`
    
    a{
        font-size: 2rem;
        margin-left: 2rem;
        color:#666;
    }

    a:hover{
        color:${red};
    }

    @media(max-width:768px){
        position: absolute;
        top:100%; left: 0; right:0;
        background: #f7f7f7;
        border-top: .1rem solid rgba(0,0,0,.1);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

        .active{
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        a{
            margin: 1.5rem;
            padding:1.5rem;
            display: block;
            border:.2rem solid rgba(0,0,0,.1);
            border-left:.5rem solid var(--red);
            background:#fff;
        }
    }
`;