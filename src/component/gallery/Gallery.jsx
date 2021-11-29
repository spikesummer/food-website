import React from "react";
import { BoxContainer } from "../boxContainer/BoxContainer";
import { ButtonOrderNow } from "../buttonOrderNow/ButtonOrderNow";
import { Heading } from "../heading/Heading";
import { MainSection } from "../mainSection/MainSection";
import { Box, Content } from "./GalleryStyle";

export const Gallery = () => {
    
    const tasty = [
        {
            image: "img/g-1.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-2.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-3.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-4.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-5.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-6.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-7.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-8.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        },
        {
            image: "img/g-9.jpg",
            title: "tasty food",
            paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum."
        }
    ]

    return(
        <MainSection id="gallery">
            <Heading textBefore="our food" span="gallery"/>
            <BoxContainer>
                {tasty.map((item, index) => {
                    return(
                        <Box key={index}>
                            <img src={item.image} alt=""/>
                            <Content >
                                <h3>{item.title}</h3>
                                <p>{item.paragraph}</p>
                                <ButtonOrderNow text="order now"/>
                            </Content>
                        </Box>
                    )})
                }
            </BoxContainer>
        </MainSection>
    )
}