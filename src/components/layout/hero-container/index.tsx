import React from "react";
import { StyledContainer } from "./style";

type HeroContainerPropsType = {
    children: any
}

const HeroContainer: React.FC<HeroContainerPropsType> = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default HeroContainer;
