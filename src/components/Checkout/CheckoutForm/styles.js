import styled from "styled-components";

import { MainButton } from "../../../GlobalStyles";
import { colors } from "../../../assets/styles";

export const Container = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	position: fixed;
	bottom: 0;

	padding: 30px 15px 15px 15px;

	background-color: ${colors.utils["dark-gray"][200]};

	color: ${colors.font.white[100]};
`;

export const Fields = styled.fieldset`
	display: flex;
	align-items: center;
	gap: 30px;

	border: none;

	#field {
		color: ${colors.font.white[100]};
		border-bottom: 1px solid ${colors.utils["light-gray"][200]};

		&:hover {
			transition: all 0.2s ease;
			opacity: 0.4;
		}
	}

	label {
		font-size: 0.9rem;
		color: ${colors.utils["light-gray"][200]};
	}
`;

export const SubmitButton = styled(MainButton)`
	width: 100%;
`;
