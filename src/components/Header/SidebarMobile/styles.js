import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Trigger = styled(Dialog.Trigger)`
	background: none;
	border: none;

	font-size: 30px;
	cursor: pointer;
`;

export const Content = styled(Dialog.Content)`
	width: 350px;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	position: absolute;
	top: 0;
	right: 0;
	z-index: 20000;

	padding: 30px 10px;

	background-color: #0f0f0f;
`;

export const Close = styled(Dialog.Close)`
	background: none;
	border: none;

	font-size: 40px;
	cursor: pointer;
	transform: translateX(115px);
`;
