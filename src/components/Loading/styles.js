import styled, { keyframes } from "styled-components";

import { colors } from "../../assets/styles";

const spin = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

export const Circle = styled.span`
	width: 30px;
	height: 30px;

	border: 3px solid #ffffff33;
	border-radius: 50%;
	border-top-color: ${colors.accent.orange};

	animation: ${spin} 1s infinite;
`;
