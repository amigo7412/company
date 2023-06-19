import React from "react";
import { motion } from "framer-motion";
import HeroContainer from "../../../components/layout/hero-container";
import { Flex, Heading, P, Span } from "../../../components/basic";
import { Badge, Button, Icon } from "../../../components/custom";
import useStore from "../../../useStore";
import Image from "assets/images/contact.svg"
import { GV } from "utils/style.util";
import { ImageWrapper } from "./style";
import { Link } from "react-router-dom";

const ContactPage = () => {
    const { T } = useStore();
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
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
                        <Badge>{T("contact.hero.badge")}</Badge>
                        <Heading level={1}>{T("contact.hero.title")}</Heading>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Flex $style={{ maxW: "80%" }}>
                                <P>{T("contact.hero.desc")}</P>
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Flex $style={{
                                fDirection: "column",
                                gap: "1.5rem"
                            }}>
                                <Flex $style={{
                                    vAlign: "center",
                                    gap: "0.5rem"
                                }}>
                                    <Icon icon="Phone" />
                                    <Span>+1 559 512 2997</Span>
                                </Flex>
                                <Flex $style={{
                                    vAlign: "center",
                                    gap: "0.5rem"
                                }}>
                                    <Icon icon="Place" />
                                    <Span>New York, United States</Span>
                                </Flex>
                                <Flex $style={{
                                    vAlign: "center",
                                    gap: "0.5rem"
                                }}>
                                    <Icon icon="Email" />
                                    <Span>shinobi.design416@gmail.com</Span>
                                </Flex>
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 1 }}
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
                                <Link to={"/project1"}>
                                    <Button $style={{
                                        border: GV("border"),
                                        w: "200px",
                                        hideBg: true
                                    }}>{T("previous")}</Button>
                                </Link>
                                <Link to={"/"}>
                                    <Button $style={{
                                        bg: GV("primary"),
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
            </HeroContainer>
        </motion.div>
    )
}

export default ContactPage;
