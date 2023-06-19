import styled from "styled-components";
import { GV } from "utils/style.util";
import Bg from "assets/images/bg.svg";

export const StyledContainer = styled.div`
    /* width: 1440px; */
    position: relative;
    height: max(calc(100vh - ${GV("header-height")}), 300px);
    background: no-repeat url(${Bg});
    background-size: cover;
    margin: auto;
    padding: 0 5rem ${GV("header-height")};
    z-index: 1;

    @media (max-width: 992px) {
        min-height: max(calc(100vh - ${GV("header-height")}), 300px);
        padding: 0 1rem 1rem;
    }
`
