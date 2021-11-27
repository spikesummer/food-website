import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    min-height: 100vh;
    align-items: center;
    background:  no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Content = styled.div`
    flex:1 1 40rem;
    padding-top: 6.5rem;

    h3{
        font-size: 5rem;
        color:#333;
    }

    p{
        font-size: 1.7rem;
        color:#666;
        padding:1rem 0;
    }
`;

export const Imagem = styled.div`
    flex:1 1 40rem;
    
    img{
        width:100%;
        padding:1rem;
        animation:float 3s linear infinite;
    }

    @keyframes float{
        0%, 100%{
            transform: translateY(0rem);
        }
        50%{
            transform: translateY(3rem);
        }
    }
`;