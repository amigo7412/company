import React from "react";
import HeroContainer from "../../../components/layout/hero-container";
import { Flex, Heading, P } from "../../../components/basic";
import { Badge, Button } from "../../../components/custom";
import useStore from "../../../useStore";
import Image from "assets/images/home.svg"
import { ImageWrapper } from "./style";
import { GV } from "utils/style.util";

const HomePage = () => {
    const { T } = useStore();
    return (
        <HeroContainer>
            <Flex $style={{
                h: "100%",
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "flex-start",
                    hAlign: "center",
                    gap: "2rem",
                    w: "60%"
                }}>
                    <Badge>{T("home.hero.badge")}</Badge>
                    <Heading level={1}>{T("home.hero.title")}</Heading>
                    <Flex $style={{ maxW: "80%" }}>
                        <P>{T("home.hero.desc")}</P>
                    </Flex>
                    <Flex $style={{
                        gap: "0.5rem"
                    }}>
                        <Button $style={{
                            bg: GV("primary"),
                            w: "200px"
                        }}>{T("next")}</Button>
                        <Button $style={{
                            bg: GV("primary"),
                            w: "200px"
                        }}>{T("previous")}</Button>
                    </Flex>
                </Flex>
                <ImageWrapper>
                    <img src={Image} alt="" />
                </ImageWrapper>
            </Flex>
        </HeroContainer>
    )
}

export default HomePage;
