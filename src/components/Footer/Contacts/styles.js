import styled from "styled-components";

import { colors } from "../../../assets/styles";

export const Container = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
`;

export const ListItem = styled.li`
	font-size: 1.2rem;

	a:hover {
		transition: all 0.6s ease;
		color: ${colors.accent.orange};
	}
`;
