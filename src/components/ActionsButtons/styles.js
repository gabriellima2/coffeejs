import styled from "styled-components";

import { colors } from "../../assets/styles";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	p {
		padding: 0px 15px;
	}
`;

export const ToggleQuantity = styled.span`
	display: flex;
	align-items: center;
`;

export const Decrement = styled.button`
	padding: 10px 15px;

	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;

	cursor: pointer;
	background: none;

	border: 1px solid ${colors.transparent};

	&:active {
		background-color: ${colors.blue};
	}
`;

export const Increment = styled(Decrement)`
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;

	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
`;
