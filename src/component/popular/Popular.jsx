import React from 'react';
import { Heading } from '../heading/Heading';
import { BoxContainer } from '../boxContainer/BoxContainer';
import { Box } from './PopularStyle';
import { ButtonOrderNow } from '../buttonOrderNow/ButtonOrderNow';
import { MainSection } from '../mainSection/MainSection';

const Stars = (props)=>{
    return(
        <div className="stars">
            {props.stars.map((item, index) => {
                return(<i key={index} className={item}></i>)
                })
            }
        </div>
    );
}

export const Popular = () =>{

    const products = [
        {
            name: "tasty burguer",
            price: "$5 - $20",
            img: "img/p-1.jpg",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"]
        },
        {
            name: "tasty cakes",
            price: "$5 - $20",
            img: "img/p-2.jpg",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"]
        },
        {
            name: "tasty sweets",
            price: "$5 - $20",
            img: "img/p-3.jpg",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"]
        },
        {
            name: "tasty cupcakes",
            price: "$5 - $20",
            img: "img/p-4.jpg",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"]
        },
        {
            name: "cold drinks",
            price: "$5 - $20",
            img: "img/p-5.jpg",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"]
        },
        {
            name: "cold ice-cream",
            price: "$5 - $20",
            img: "img/p-6.jpg",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"]
        }
    ]

    return(
        <MainSection>
            <Heading textBefore="most" span="popular" textAfter="foods"/>
            <BoxContainer>
                {products.map(product =>{
                    return(
                    <Box key={product.name}>
                        <span className="price"> {product.price} </span>
                        <img src={product.img} alt=""/>
                        <h3>{product.name}</h3>
                        <Stars stars={product.stars}/>
                        <ButtonOrderNow text="order now"/>
                    </Box>
                    )
                })}
            </BoxContainer>
        </MainSection>
    )

}
