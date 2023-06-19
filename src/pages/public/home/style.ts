import { styled } from "styled-components";

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -15%;

    @media (max-width: 768px) {
        display: none;
    }
`
