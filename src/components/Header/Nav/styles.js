import styled from "styled-components";

import { mediaQueries, colors } from "../../../assets/styles";

export const NavStyle = styled.nav`
	width: 100%;
	height: 50%;
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
	top: 160px;
	z-index: 4000;

	visibility: ${({ menuMobileIsActivated }) =>
		menuMobileIsActivated ? "visible" : "hidden"};

	@media screen and (min-width: ${mediaQueries.default}) {
		position: static;
		visibility: visible;
		flex: 1;
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		width: 60%;
		flex: none;
	}
`;

export const LinksList = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	@media screen and (min-width: ${mediaQueries.default}) {
		flex-direction: row;
	}
`;

export const ItemList = styled.li`
	height: 45px;
	width: 60%;

	a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1em;
		color: #f1f1f1;

		&:active,
		&:hover {
			transition: all 0.2s ease-in;
			color: ${colors.blue};
		}

		@media screen and (min-width: ${mediaQueries.default}) {
			font-size: 1em;
		}
	}
`;
