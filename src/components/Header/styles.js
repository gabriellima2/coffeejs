import styled from "styled-components";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.header`
	width: 100%;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	position: ${({ attrStyles }) => attrStyles.position || absolute};
	top: 0;
	z-index: 10000;

	background: ${({ attrStyles }) => attrStyles["bg-color"] || transparent};

	padding: 5px 40px 5px 40px;

	button {
		@media screen and (min-width: ${mediaQueries.medium}) {
			display: none;
		}
	}
`;

export const ControlVisibility = styled.span`
	@media screen and (max-width: ${mediaQueries.medium}) {
		display: none;
	}
`;

export const Content = styled.section`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const CartButton = styled.span`
	display: flex;
	align-items: center;
	gap: 5px;

	padding: 10px;
	border-radius: 100%;

	background-color: ${colors.accent.orange};

	&:hover {
		transition: all 0.2s ease;
		opacity: 0.8;
	}
`;
