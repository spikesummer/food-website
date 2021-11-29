import React from "react";
import { BoxContainer } from "../boxContainer/BoxContainer";
import { Heading } from "../heading/Heading";
import { MainSection } from '../mainSection/MainSection'
import { Box, Content } from './SpecialityStyle';

export const Speciality = () => {

    const tasty =[
        {
            image: "img/s-img-1.jpg",
            icon: "img/s-1.png",
            title: "tasty burger",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut."
        },
        {
            image: "img/s-img-2.jpg",
            icon: "img/s-2.png",
            title: "tasty pizza",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut."
        },
        {
            image: "img/s-img-3.jpg",
            icon: "img/s-3.png",
            title: "cold ice-cream",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut."
        },
        {
            image: "img/s-img-4.jpg",
            icon: "img/s-4.png",
            title: "cold drinks",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut."
        },
        {
            image: "img/s-img-5.jpg",
            icon: "img/s-5.png",
            title: "tasty sweets",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut."
        },
        {
            image: "img/s-img-6.jpg",
            icon: "img/s-6.png",
            title: "healty breakfast",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut."
        }
    ]

    return(
        <MainSection id="speciality">
            <Heading textBefore="our" span="speciality"/>
            <BoxContainer>
                {tasty.map((item, index) => {
                    return(
                        <Box key={index}>
                            <img src={item.image} alt=""/>
                            <Content key={index}>
                                <img src={item.icon} alt=""/>
                                <h3>{item.title}</h3>
                                <p>{item.paragraph}</p>
                            </Content>
                        </Box>
                    )})
                }
            </BoxContainer>
        </MainSection>
    )
}