import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroContainer from "../../../components/layout/hero-container";
import { Flex, Heading, P } from "../../../components/basic";
import { Badge, Button } from "../../../components/custom";
import useStore from "../../../useStore";
import Image from "assets/images/home.svg"
import { ImageWrapper } from "./style";
import _ROUTERS from "constants/menu.constant";

const initAnime = { opacity: 0, translateY: 30 };
const finalAnime = { opacity: 1, translateY: 0 };

const HomePage = () => {
    const { T } = useStore();

    return (
        <motion.div
            initial={initAnime}
            whileInView={finalAnime}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <HeroContainer>
                <Flex $style={{
                    h: "100%",
                }}>
                    <Flex $style={{
                        fDirection: "column",
                        vAlign: "flex-start",
                        hAlign: "center",
                        gap: "2rem",
                        w: "50%",
                        queries: {
                            768: {
                                w: "100%"
                            }
                        }
                    }}>
                        <Badge>{T("home.hero.badge")}</Badge>
                        <Heading level={1}>{T("home.hero.title")}</Heading>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Flex $style={{ maxW: "80%" }}>
                                <P>{T("home.hero.desc")}</P>
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Flex $style={{
                                gap: "0.5rem",
                                queries: {
                                    768: {
                                        fDirection: "column"
                                    }
                                }
                            }}>
                                <Link to={_ROUTERS.home}>
                                    <Button $style={{
                                        w: "200px",
                                        hideBg: true
                                    }}>{T("previous")}</Button>
                                </Link>
                                <Link to={_ROUTERS.about}>
                                    <Button $style={{
                                        w: "200px"
                                    }}>{T("next")}</Button>
                                </Link>
                            </Flex>
                        </motion.div>
                    </Flex>
                    <ImageWrapper>
                        <img src={Image} alt="" />
                    </ImageWrapper>
                </Flex>
            </HeroContainer >
        </motion.div>
    )
}

export default HomePage;
