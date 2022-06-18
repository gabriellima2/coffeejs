import styled from "styled-components";
import * as RadixDialog from "@radix-ui/react-dialog";

import { colors } from "../../../assets/styles";

const BACKGROUND_OPACITY = "f2";

export const Content = styled(RadixDialog.Content)`
	height: 100vh;

	background-color: red;

	position: relative;
`;

export const Container = styled.section`
	width: fit-content;
	max-width: 450px;
	height: fit-content;
	max-height: 300px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 30000;

	border-radius: 5px;

	font-family: "Montserrat", sans-serif;
	text-align: center;

	padding: 40px 50px;

	background-color: ${colors.utils["dark-gray"][200] + BACKGROUND_OPACITY};

	h1 {
		font-size: 1.5rem;
		text-transform: capitalize;
		letter-spacing: 0.5px;
		color: ${colors.font.white[100]};
	}

	small {
		font-size: 0.7rem;
		font-weight: bold;
		color: ${colors.utils["light-gray"][200]};
	}
`;

export const Check = styled.i`
	color: ${colors.utils.green};
	font-size: 3.5rem;
`;

export const ConfirmButton = styled.a`
	border: 1px solid ${colors.utils.green};
	padding: 15px 35px;
	margin-top: 20px;

	position: relative;

	font-size: 0.9rem;
	color: ${colors.utils.green};
	font-weight: 600;

	cursor: pointer;
	background: none;

	&::after {
		content: "";
		display: block;
		width: 0%;
		height: 100%;

		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

		transition: width 0.3s linear;

		background-color: ${colors.utils.green};
	}

	&:hover {
		transition: all 0.5s ease;
		color: ${colors.font.black[100]};
	}

	&:hover::after {
		width: 100%;
	}
`;
