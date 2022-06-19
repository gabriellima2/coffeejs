import styled, { keyframes } from "styled-components";
import { mediaQueries } from "../../assets/styles";

const spin = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

export const Circle = styled.span`
	padding: 10px;

	border: 3px solid #ffffff33;
	border-radius: 50%;
	border-top-color: ${({ color }) => color};

	animation: ${spin} 1s infinite;

	@media screen and (min-width: ${mediaQueries.small}) {
		padding: 15px;
	}
`;
