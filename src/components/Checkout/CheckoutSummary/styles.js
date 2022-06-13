import styled from "styled-components";

import { mediaQueries, colors } from "../../../assets/styles";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	font-family: "Montserrat", sans-serif;
	text-transform: capitalize;

	padding: 20px;
	background-color: #13131366;
`;

export const Title = styled.h1`
	text-transform: uppercase;
`;

export const Text = styled.p`
	display: flex;
	justify-content: space-between;
	gap: 40px;

	font-size: 0.9rem;

	margin: 5px 0px;

	span {
		font-size: 1rem;
		font-weight: 600;
	}
`;

export const Total = styled.h2`
	span {
		text-transform: uppercase;
		font-size: 0.9rem;
		font-weight: 500;
	}
`;
