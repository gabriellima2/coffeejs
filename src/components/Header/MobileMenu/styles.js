import styled from "styled-components";

import media from "../../../assets/mediaQueries";

export const Button = styled.button`
	display: flex;
	border: none;
	padding: 5px;
	color: ${({ isActive }) =>
		!isActive ? ({ theme }) => theme.fontColor : "#f1f1f1"};
	font-size: 2.5em;
	background: none;
	z-index: 4000;
	cursor: pointer;
	order: 1;

	@media screen and (min-width: ${media.default}) {
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

	@media screen and (min-width: ${media.default}) {
		display: none;
	}
`;
