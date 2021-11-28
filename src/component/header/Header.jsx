import React from 'react';
import { Container, Logo, MenuBar, NavBar } from './headerStyle';

export const Header = () =>{

    const menu = [
        {
            href: "#home",
            value: "home"
        },
        {
            href: "#speciality",
            value: "speciality"
        },
        {
            href: "#popular",
            value: "popular"
        },
        {
            href: "#gallery",
            value: "gallery"
        },
        {
            href: "#review",
            value: "review"
        },
        {
            href: "#order",
            value: "order"
        },
    ]

    return(
        <Container>
            
            <Logo><i className="fas fa-utensils"></i>food</Logo>

            <MenuBar><i className="fas fa-bars"></i></MenuBar>

            <NavBar>
                {menu.map(item =>(
                    <a key={item.href} href={item.href}>{item.value}</a>
                ))}
            </NavBar>
        </Container>
    )
}