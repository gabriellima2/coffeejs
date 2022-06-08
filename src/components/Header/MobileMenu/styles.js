import styled from "styled-components";

import { mediaQueries, colors } from "../../../assets/styles";

export const Button = styled.button`
	display: flex;
	border: none;
	padding: 5px;
	color: ${colors.fontColor};
	font-size: 2.5em;
	background: none;
	z-index: 4000;
	cursor: pointer;
	order: 1;

	@media screen and (min-width: ${mediaQueries.default}) {
		display: none;
	}
`;

export const AreaMenu = styled.div`
	width: ${({ isActive }) => (!isActive ? 0 : 100)}vw;
	height: 100%;
	position: absolute;
	right: ${({ isActive }) => (!isActive ? -60 : 0)}%;
	top: 0;
	background-color: rgba(0, 0, 0, 0.9);
	display: ${({ isActive }) => (!isActive ? "none" : "flex")};
	z-index: 3000;

	@media screen and (min-width: ${mediaQueries.default}) {
		display: none;
	}
`;
