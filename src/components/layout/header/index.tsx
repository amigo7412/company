import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer, HeaderWrapper } from "./style";
import Logo from "../../basic/logo";
import Menu from "./components/menu";
import useScroll from "../../../hooks/useScroll";
import { Hamburger } from "./components/menu/style";

const Header = () => {
    const location = useLocation();

    const [, scrollY, dir] = useScroll();
    const [isHide, setIsHide] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBg, setIsBg] = useState<boolean>(false);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (scrollY >= 300 && dir === "up") {
            setIsHide(() => true)
        } else {
            setIsHide(() => false)
        }

        if (scrollY >= 300) {
            setIsBg(() => true)
        } else {
            setIsBg(() => false)
        }
    }, [dir, scrollY])

    useEffect(() => {
        closeMenu();
    }, [location])

    return (
        <HeaderContainer isHide={isHide} isBg={isBg}>
            <HeaderWrapper>
                <Logo />
                <Menu isOpen={isOpen} closeMenu={closeMenu} />
                <Hamburger isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
                    <span />
                </Hamburger>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;
