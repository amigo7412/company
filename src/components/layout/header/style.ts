import styled from "styled-components"
import { GV } from "../../../utils/style.util"

export const HeaderContainer = styled.header<{ isHide: boolean, isBg: boolean }>`
	/* position: fixed;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0); */
	position: relative;
	z-index: 8000;
	width: 100%;
	transition: all ease-in-out .5s;

	${({ isBg }) => isBg ? `
		background: ${GV("bg-sub")};
		backdrop-filter: blur(10px);
	` : ``}
	transition: all ease-in-out .3s;

	${({ isHide }) => isHide ? `
		transform: translate(-50%, -100%);
	` : ``}

	/* &:after {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #D0D0E360;
		content: "";
	} */
`

export const HeaderWrapper = styled.menu`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* max-width: 1440px; */
	padding: 0 5rem;
	margin: 0 auto;
	height: ${GV("header-height")};
	gap: 2rem;

	> div {
		> :not(:first-child) {
			@media screen and (max-width: 600px) {
				display: none;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`