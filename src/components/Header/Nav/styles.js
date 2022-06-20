import styled from "styled-components";

import { mediaQueries, colors } from "../../../assets/styles";

export const Container = styled.nav`
	@media screen and (max-width: ${mediaQueries.medium}) {
		height: 100%;

		display: flex;
		align-items: center;
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;

	@media screen and (max-width: ${mediaQueries.medium}) {
		flex-direction: column;
		gap: 70px;
	}
`;

export const ListItem = styled.li`
	text-transform: capitalize;
	font-weight: 500;
	letter-spacing: 1px;

	color: ${(props) => (props.color ? props.color : colors.font.black[100])};

	a {
		display: flex;
		align-items: center;
		gap: 10px;

		padding: 7px;

		position: relative;

		&::after {
			content: "";
			display: block;

			width: 0;
			height: 2px;

			position: absolute;
			bottom: 0;
			left: 0;

			transition: all 0.4s ease;
			opacity: 0.6;
			background-color: ${colors.accent.red};
		}

		&:hover::after {
			width: 100%;
		}

		&:hover {
			transition: all 0.6s ease;
			color: ${colors.font.accent};
		}

		@media screen and (max-width: ${mediaQueries.medium}) {
			font-size: 1.2rem;
		}
	}
`;
