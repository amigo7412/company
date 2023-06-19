import React, { HTMLAttributes } from "react";
import { StyledContainer } from "./style";

type HeroContainerPropsType = HTMLAttributes<HTMLElement> & {
    ref?: any
    children: any
}

const HeroContainer: React.FC<HeroContainerPropsType> = ({ ref, children }) => {
    return (
        <StyledContainer ref={ref}>
            {children}
        </StyledContainer>
    )
}

export default HeroContainer;
