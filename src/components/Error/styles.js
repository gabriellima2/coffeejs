import styled from "styled-components";

import { colors } from "../../assets/styles";

export const Container = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;

	color: ${colors.font.white[100]};
	text-align: center;
	padding-top: 40px;

	h1 {
		text-transform: uppercase;
	}

	i {
		font-size: 3em;
	}

	a {
		font-weight: 500;
		text-decoration: underline;

		&:hover {
			transition: all 0.2s ease;
			opacity: 0.8;
		}
	}
`;
