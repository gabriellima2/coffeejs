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

		&:hover {
			transition: all 0.2s ease;
			opacity: 0.7;
		}

		@media screen and (max-width: ${mediaQueries.medium}) {
			font-size: 1.2rem;
		}
	}
`;
