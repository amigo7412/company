import React from "react";
import Flex from "../../../../basic/flex";
import Icon from "../../../../custom/icon";
import { MenuContainer, MenuLink, Nav, StyledMenuItem, Submenu, SubmenuItem } from "./style";
import _ROUTERS from "../../../../../constants/menu.constant";
import useStore from "../../../../../useStore";

type MenuPropsType = {
    isOpen: boolean
    closeMenu: any
}

type MenuLinkItemPropsType = {
    to: string
    label: string
}

type MenuItemPropsType = MenuLinkItemPropsType | { label: string, submenu: MenuLinkItemPropsType[] }

const MenuItem: React.FC<MenuItemPropsType> = (props) => {

    let label = props.label;
    let to = "#";
    let submenu: MenuLinkItemPropsType[] | null = null;

    if ('to' in props) {
        to = props.to;
    } else {
        submenu = props.submenu;
    }

    return (
        <MenuLink>
            <StyledMenuItem to={to}>
                {label}
                {!('to' in props) && (
                    <Icon icon="ChevronArrowDown" />
                )}
            </StyledMenuItem>
            {submenu !== null && (
                <Submenu>
                    {submenu.map((item: MenuLinkItemPropsType, index: number) => (
                        <Flex key={index} as={"li"}>
                            <SubmenuItem to={item.to}>
                                {item.label}
                            </SubmenuItem>
                        </Flex>

                    ))}

                </Submenu>
            )}
        </MenuLink>
    )
}

const Menu: React.FC<MenuPropsType> = ({ isOpen, closeMenu }) => {
    const { T } = useStore();

    return (
        <MenuContainer isOpen={isOpen}>
            <Nav>
                <MenuItem to={_ROUTERS.home} label={T("menu.home")} />
                <MenuItem to={_ROUTERS.offers} label={T("menu.offers")} />
                <MenuItem to={_ROUTERS.about} label={T("menu.about")} />
                <MenuItem to={_ROUTERS.services} label={T("menu.services")} />
                <MenuItem to={_ROUTERS.pricing} label={T("menu.pricing")} />
                <MenuItem to={_ROUTERS.project} label={T("menu.project")} />
                <MenuItem to={_ROUTERS.contact} label={T("menu.contact")} />
                <MenuItem to="" label="Login" />
            </Nav>
        </MenuContainer>
    )
}

export default Menu;
