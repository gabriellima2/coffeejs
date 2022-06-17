import styled from "styled-components";

import { colors } from "../../assets/styles";

export const Container = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 20px;

	background: ${colors.utils["dark-gray"][200]};
`;

export const Company = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;

	small {
		text-transform: capitalize;
		font-weight: bold;
		font-size: 0.6rem;
		color: ${colors.utils["light-gray"][200]};
		opacity: 0.9;
	}
`;
