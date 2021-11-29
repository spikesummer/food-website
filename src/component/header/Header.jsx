import React, { useState } from 'react';
import { Container, Logo, MenuBar, NavBar } from './headerStyle';

export const Header = (props) =>{
    const [activeMenu, setActiveMenu] = useState("fa-bars");
    const [activeNavBar, setActiveNavBar] = useState("");

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

    window.onscroll = () =>{if(activeMenu !== "fa-bars") troca()}

    function troca( ){
        activeMenu === "fa-bars"?setActiveMenu("fa-times"):setActiveMenu("fa-bars");
        activeMenu === "fa-bars"?setActiveNavBar("active"):setActiveNavBar("");
    }
    
    return(
        <Container>
            
            <Logo ><i className="fas fa-utensils"></i>food</Logo>

            <MenuBar onClick={troca}><i className={`fas ${activeMenu}`}></i></MenuBar>

            <NavBar className={activeNavBar}>
                {menu.map((item, index) =>(
                    <a key={index} href={item.href}>{item.value}</a>
                ))}
            </NavBar>
        </Container>
    )
}