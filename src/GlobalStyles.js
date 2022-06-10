import styled, { createGlobalStyle } from "styled-components";

import { mediaQueries, colors } from "./assets/styles";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		color: ${colors.font.white[100]};
		font-family: 'Raleway', sans-serif;

		overflow-x: hidden;
		background-color: ${colors.background};
	}

	a {
		text-decoration: none;
		color: ${colors.font.white[100]};
		font-family: 'Raleway', sans-serif;
	}

	li {
		list-style: none;
	}

	button {
		color: ${colors.font.white[100]};
		font-family: 'Raleway', sans-serif;

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
