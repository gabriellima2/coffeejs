import styled from "styled-components";

import { MainButton } from "../../../GlobalStyles";
import { colors, mediaQueries } from "../../../assets/styles";

const BORDER_OPACITY_IN_HEX = "33";

export const Container = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	padding: 15px 20px;

	color: ${colors.font.white[100]};

	h1 {
		font-size: 1.1rem;
	}
`;

export const Fields = styled.fieldset`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 15px;

	border: none;

	div {
		width: 100%;
	}

	input {
		width: 100%;
		color: ${colors.font.white[100]};
		border-bottom: 2px solid
			${colors.utils["light-gray"][200] + BORDER_OPACITY_IN_HEX};
		padding: 5px;

		&:hover {
			transition: all 0.2s ease;
			opacity: 0.6;
		}
	}

	label {
		font-size: 0.9rem;
		color: ${colors.utils["light-gray"][200]};
	}
`;

export const Address = styled.div`
	min-height: 15px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	text-align: center;
	font-weight: 500;

	margin-top: 5px;
`;

export const SubmitButton = styled(MainButton)`
	width: 100%;

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`;
