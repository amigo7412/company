import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import _ROUTERS from "constants/menu.constant";
import HeroContainer from "../../../components/layout/hero-container";
import { Flex, Heading } from "../../../components/basic";
import { Button } from "../../../components/custom";
import { Project1Container } from "./style";
import useStore from "../../../useStore";

import "swiper/css";
import "swiper/css/pagination";

import Image1 from "assets/images/1.png"
import Image2 from "assets/images/project.png"
import Image3 from "assets/images/2.png"

const SwiperContainer = styled.div`
    width: 100%;
    padding: 3rem 0;

    .swipper {
        overflow: auto !important;
    }

    @media (max-width: 768px) {
        height: 50vw;
    }

    & .swiper-slide-active {
        z-index: 5;
    }

    .swiper-slide {
        height: 100%;

        > div {
            width: 100%;
        }

        &.swiper-slide-active {
            > div:first-child {
                transition: all ease-in-out .4s;
                transform: scale(1.2);

                @media (max-width: 768px) {
                    transform: scale(1.3);
                }

                @media (max-width: 600px) {
                    transform: scale(1.5);
                }
            }
        }
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: rgba(181, 249, 253, 0.42);
    border-radius: 1.875rem;
    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
        border-radius: 0.875rem;
    }

    @media (max-width: 600px) {
        border-radius: 0.875rem;
    }
`

const Label = styled.span`
    background: rgba(0, 0, 0, 0.3);
    line-height: 3em;
    font-weight: 700;
`

const Project1Page = () => {
    const { T } = useStore();
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <HeroContainer>
                <Project1Container>
                    <Heading level={1} $style={{
                        align: "center"
                    }}>Our Projects</Heading>
                    {/* <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    > */}
                    <SwiperContainer>
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            centeredSlides={true}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            grabCursor={true}
                        >
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image1} alt="image1" />
                                    </Flex>
                                    <Label>Designs</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image2} alt="image2" />
                                    </Flex>
                                    <Label>UI Designs</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image3} alt="image3" />
                                    </Flex>
                                    <Label>Mockups</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image1} alt="image1" />
                                    </Flex>
                                    <Label>Designs</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image2} alt="image2" />
                                    </Flex>
                                    <Label>UI Designs</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image3} alt="image3" />
                                    </Flex>
                                    <Label>Mockups</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image1} alt="image1" />
                                    </Flex>
                                    <Label>Designs</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image2} alt="image2" />
                                    </Flex>
                                    <Label>UI Designs</Label>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        flex: "1"
                                    }}>
                                        <img src={Image3} alt="image3" />
                                    </Flex>
                                    <Label>Mockups</Label>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperContainer>
                    {/* </motion.div> */}
                    <Flex $style={{
                        hAlign: "space-between",
                        gap: "0.5rem",
                        w: "100%",
                        queries: {
                            768: {
                                fDirection: "column"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link to={"/project"}>
                                <Button $style={{
                                    w: "200px",
                                    hideBg: true
                                }}>{T("previous")}</Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link to={_ROUTERS.contact}>
                                <Button $style={{
                                    w: "200px"
                                }}>{T("next")}</Button>
                            </Link>
                        </motion.div>
                    </Flex>
                </Project1Container>
            </HeroContainer>
        </motion.div>
    )
}

export default Project1Page;
