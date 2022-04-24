import styled, { createGlobalStyle } from "styled-components";

import media from "./assets/mediaQueries";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		width: 100%;
		height: 100%;

		color: ${({ theme }) => theme.fontColor};
		font-family: 'Space Mono', monospace;

		overflow-x: hidden;
		background-color: ${({ theme }) => theme.bgColors.second};
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.fontColor};
	}

	li {
		list-style: none;
	}

	button {
		color: ${({ theme }) => theme.fontColor};
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

	@media screen and (min-width: ${media.default}) {
		font-size: 0.8em;
		padding: 15px 20px;
	}
`;
