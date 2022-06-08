import styled, { createGlobalStyle } from "styled-components";

import { mediaQueries, colors } from "./assets/styles";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		width: 100%;
		height: 100%;

		color: ${colors.fontColor};
		font-family: 'Space Mono', monospace;

		overflow-x: hidden;
		background-color: ${colors.bgColors.second};
	}

	#root {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100px minmax(100vh, auto) 155px;
	}

	a {
		text-decoration: none;
		color: ${colors.fontColor};
	}

	li {
		list-style: none;
	}

	button {
		color: ${colors.fontColor};
	}
`;

export const Button = styled.button`
	border: none;
	padding: 15px;
	border-radius: 5px;

	font-family: "Space Mono", monospace;
	text-transform: uppercase;
	font-size: 0.7em;
	font-weight: bold;
	letter-spacing: 2px;
	color: #000;

	cursor: pointer;
	background-color: #f8a423;

	&:hover {
		transition: all 0.2s ease;
		background-color: #d68c18;
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		font-size: 0.8em;
		padding: 15px 20px;
	}
`;
