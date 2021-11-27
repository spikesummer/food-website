import React from 'react';
import { ButtonOrderNow } from '../buttonOrderNow/ButtonOrderNow';
import { Container, Content, Imagem } from '../home/homeStyle';

export const Home = () =>{


    return(
        <Container>
            <Content>
                <h3>food made with love</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>   
                <ButtonOrderNow text="order now"/>
            </Content>
            <Imagem>
                <img src="img/home-img.png" alt=""></img>
            </Imagem>
        </Container>
    )
}