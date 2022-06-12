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

export const MainButton = styled.button`
	border: none;
	border-radius: 5px;

	font-weight: 600;
	font-size: 1.1rem;

	padding: 17px 50px;

	cursor: pointer;
	background-color: ${colors.accent.red};

	&:hover {
		transition: all 0.2s ease-in;
		opacity: 0.8;
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		padding: 20px 50px;
		font-size: 1.2rem;
	}
`;

export const Title = styled.h1`
	width: fit-content;

	color: ${colors.font.white[100]};
	text-transform: uppercase;

	position: relative;

	&::after {
		content: "";
		display: block;

		width: 70%;
		height: 2px;

		position: absolute;
		left: 0;
		bottom: -5px;

		background-color: ${colors.accent.orange};
	}
`;
