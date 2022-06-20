import styled from "styled-components";
import { Dialog } from "@headlessui/react";

export const Content = styled(Dialog.Panel)`
	width: 300px;
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

export const Close = styled.button`
	background: none;
	border: none;

	font-size: 40px;
	cursor: pointer;
	transform: translateX(100px);
`;
