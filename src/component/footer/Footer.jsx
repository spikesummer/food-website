import React from "react";
import { ButtonOrderNow } from "../buttonOrderNow/ButtonOrderNow";
import { Container, Credits, Share} from "./FooterStyle";

export const Footer = () => {

    return(
        <>
            <Container>
                <Share>
                    <ButtonOrderNow text="facebook"/>
                    <ButtonOrderNow text="twitter"/>
                    <ButtonOrderNow text="instagram"/>
                    <ButtonOrderNow text="pinterest"/>
                    <ButtonOrderNow text="linkedin"/>
                </Share>
                <Credits>recreated by <span> Adriano S. Costa </span> | all rights reserved!</Credits>
            </Container>
        </>
    )
}