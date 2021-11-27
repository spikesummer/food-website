import React from 'react';
import { Container, Logo, MenuBar, NavBar } from './headerStyle';

export const Header = () =>{


    return(
        <Container>
            
            <Logo><i className="fas fa-utensils"></i>food</Logo>

            <MenuBar><i className="fas fa-bars"></i></MenuBar>

            <NavBar>
                <a href="#home">home</a>
                <a href="#speciality">speciality</a>
                <a href="#popular">popular</a>
                <a href="#gallery">gallery</a>
                <a href="#review">review</a>
                <a href="#order">order</a>
            </NavBar>
        </Container>
    )
}