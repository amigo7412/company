import styled from "styled-components";
import { GV } from "utils/style.util";
import Bg from "assets/images/bg.svg";

export const StyledContainer = styled.div`
    /* width: 1440px; */
    height: max(calc(100vh - ${GV("header-height")}), 300px);
    background: no-repeat url(${Bg});
    background-size: cover;
    margin: auto;
    padding: 0 5rem ${GV("header-height")};
`
