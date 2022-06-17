import styled from "styled-components";

import { colors } from "../../../assets/styles";

export const Container = styled.span`
	display: flex;
	align-items: center;
	gap: 5px;

	padding: 10px;
	border-radius: 100%;

	background-color: ${colors.accent.orange};

	position: relative;

	&:hover {
		transition: all 0.2s ease;
		opacity: 0.8;
	}

	p {
		width: 20px;
		max-width: 20px;
		height: 20px;
		max-height: 20px;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		top: -5px;
		left: 25px;

		font-family: "Montserrat", sans-serif;
		font-weight: bold;
		font-size: 0.7rem;
		color: ${colors.font.accent};

		border-radius: 100%;
		background-color: ${colors.accent.orange};
	}
`;
