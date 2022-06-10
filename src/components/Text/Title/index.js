import styled from "styled-components";

import { colors } from "../../../assets/styles";

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
