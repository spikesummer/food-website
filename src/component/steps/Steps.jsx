import React from 'react';
import { Heading } from '../heading/Heading';
import { MainSection } from '../mainSection/MainSection';
import { Box, StepSection } from './StepsStyled';

export const Steps = ()=>{

    const step = [
        {
            image: "img/step-1.jpg",
            title: "choose your favorite food"
        },
        {
            image: "img/step-2.jpg",
            title: "free and fast delivery"
        },
        {
            image: "img/step-3.jpg",
            title: "easy payments methods"
        },
        {
            image: "img/step-4.jpg",
            title: "and finally, enjoy your food"
        }
    ]

    return(
        <div className="step-container">
            <Heading textBefore="how it" span="works"/>
            
            <MainSection>
                <StepSection>
                    {step.map(item =>{
                        return(
                            <Box key={item.image}>
                                <img src={item.image} alt=""/>
                                <h3>{item.title}</h3>
                            </Box>
                        )
                    })}
                </StepSection>
            </MainSection>
        </div>
    )
}