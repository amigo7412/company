import React from "react";
import { motion } from "framer-motion";
import HeroContainer from "../../../components/layout/hero-container";
import { Flex, Heading, P } from "../../../components/basic";
import { Badge, Button } from "../../../components/custom";
import useStore from "../../../useStore";
import Image from "assets/images/project.png"
import { Link } from "react-router-dom";

const ProjectPage = () => {
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
                    gap: "2rem"
                }}>
                    <Flex $style={{
                        flex: "1",
                        hAlign: "flex-start",
                        vAlign: "center"
                    }}>
                        <img src={Image} alt="" />
                    </Flex>
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
                        <Badge>{T("project.hero.badge")}</Badge>
                        <Heading level={1}>{T("project.hero.title")}</Heading>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Flex $style={{ maxW: "80%" }}>
                                <P>{T("project.hero.desc")}</P>
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
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
                                <Link to={"/services1"}>
                                    <Button $style={{
                                        w: "200px",
                                        hideBg: true
                                    }}>{T("previous")}</Button>
                                </Link>
                                <Link to={"/project1"}>
                                    <Button $style={{
                                        w: "200px"
                                    }}>{T("next")}</Button>
                                </Link>
                            </Flex>
                        </motion.div>
                    </Flex>
                </Flex>
            </HeroContainer>
        </motion.div>
    )
}

export default ProjectPage;
