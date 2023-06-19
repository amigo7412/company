import styled from "styled-components";
import { GV } from "../../../utils/style.util";
import Wrapper1Image from "assets/images/btn-wrapper1.svg";
import Wrapper2Image from "assets/images/btn-wrapper2.svg";

export type StyledButtonType = {
    bg?: string
    color?: string
    p?: string
    w?: string
    h?: string
    fsize?: string
    border?: string
    hideBg?: boolean
}

export const StyledButton = styled.button<StyledButtonType>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    border-radius: 5px;
    font-size: ${GV("font-size")};
    transition: all ease-in-out .1s;
    /* clip-path: polygon(100% 0, 100% 86%, 84% 100%, 0 100%, 0 0); */

    ${({ w }) => w ? `width: ${w};` : ``}
    ${({ h }) => `line-height: ${h ? h : '4rem'};`}
    ${({ h }) => `min-height: ${h ? h : '4rem'};`}
    ${({ p }) => `padding: ${p ?? '0 2rem'};`}
    ${({ color }) => color ? `color: ${color};` : ``}
    ${({ fsize }) => fsize ? `font-size: ${fsize};` : ``}

    background: no-repeat url(${Wrapper1Image});
    background-size: 100% 100%;
    background-position: center;

    &:after {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
        z-index: -1;
        content: "";

        ${({ hideBg }) => !hideBg ? `
            background: no-repeat url(${Wrapper2Image});
            background-size: 100% 100%;
            background-position: center;
        ` : ``}
    }
`
