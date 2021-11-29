import React from "react";
import { Heading } from "../heading/Heading";
import { MainSection } from "../mainSection/MainSection";
import { Button, Form, Image, InputBox, Row } from "./OrderStyle";

export const Order = () => {

    return(
        <MainSection id="order">
            <Heading textAfter="now" span="order"/>

            <Row>

                <Image>
                    <img src="img/order-img.jpg" alt=""/>
                </Image>

                <Form>
                    <InputBox>
                        <input type="text" placeholder="name"/>
                        <input type="email" placeholder="email"/>
                    </InputBox>
                    
                    <InputBox>
                        <input type="number" placeholder="number"/>
                        <input type="text" placeholder="food name"/>
                    </InputBox>
                    
                    <textarea placeholder="address" name="" id="" cols="30" rows="10"></textarea>
                    <Button type="submit" text="order now"/>

                </Form>

            </Row>
        </MainSection>
    )
}