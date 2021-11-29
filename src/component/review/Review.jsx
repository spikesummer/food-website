import React from 'react';
import { BoxContainer } from '../boxContainer/BoxContainer';
import { Heading } from '../heading/Heading';
import { MainSection } from '../mainSection/MainSection';
import { Box } from './ReviewStyle';

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

export const Review = () => {

    const customers = [
        {
            imagem: "img/pic1.png",
            name: "john deo",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque."
        },
        {
            imagem: "img/pic2.png",
            name: "john deo",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque."
        },
        {
            imagem: "img/pic3.png",
            name: "john deo",
            stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"],
            comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque."
        }
    ]

    return(
        <MainSection id="review">
            <Heading textBefore="our customers" span="reviews"/>
            <BoxContainer>
                {customers.map((item, index) => {
                        return(
                            <Box key={index}>
                                <img src={item.imagem} alt=""/>
                                <h3>{item.name}</h3>
                                <Stars stars={item.stars}/>
                                <p>{item.comments}</p>
                            </Box>
                        )
                    })
                }     
            </BoxContainer>
        </MainSection>
    )
}