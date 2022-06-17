import styled from "styled-components";

import { colors } from "../../../assets/styles";

export const Container = styled.span`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 5px;

	button {
		border: none;
		background: none;

		font-size: 1.4rem;
		padding: 2px;

		position: relative;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	span {
		display: none;
	}

	input {
		width: 30px;
		min-width: 30px;

		color: ${colors.font.white[100]};
		text-align: center;

		border: 1px solid ${colors.utils["dark-gray"][300]};
		border-radius: 5px;

		padding: 4px;
		background: none;
	}
`;
