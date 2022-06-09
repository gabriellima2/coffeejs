import styled from "styled-components";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.footer`
	display: flex;
	justify-content: space-between;

	padding: 20px;

	background: ${colors.italy};
`;

export const Company = styled.section`
	display: flex;
	flex-direction: column;
	gap: 7px;

	font-weight: 600;
	color: ${colors.font.white};

	small {
		margin-left: 5px;
	}
`;

export const List = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
`;

export const ListItem = styled.li`
	font-size: 1.2rem;

	&:hover {
		transition: all 0.1s ease;
		opacity: 0.7;
	}
`;
