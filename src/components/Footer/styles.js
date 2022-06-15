import styled from "styled-components";

import { colors } from "../../assets/styles";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;

	padding: 25px 20px 0px 20px;

	background: ${colors.utils["dark-gray"][200]};
`;

export const MainContent = styled.section`
	display: flex;
	justify-content: space-between;
	padding-bottom: 15px;
`;

export const SmallContent = styled.section`
	width: 100%;
	text-align: center;

	padding: 12px 0px;

	border-top: 1px solid ${colors.utils["dark-gray"][300]};

	small {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 0.8rem;
	}
`;

export const Company = styled.section`
	display: flex;
	flex-direction: column;
	gap: 7px;

	font-weight: 600;
	color: ${colors.font.white[100]};

	small {
		margin-left: 5px;
		font-size: 0.7rem;
	}
`;
