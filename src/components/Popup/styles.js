import styled from "styled-components";

export const Container = styled.div`
	width: fit-content;
	white-space: nowrap;

	position: fixed;
	top: 25px;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 4000;

	color: #000;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
	padding: 10px;
	border-radius: 5px;
	background-color: #08de46;
`;
