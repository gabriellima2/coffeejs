import styled from "styled-components";

import { MainButton } from "../../GlobalStyles";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	font-family: "Montserrat", sans-serif;

	padding: 20px;

	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: #161616f2;

	@media screen and (min-width: ${mediaQueries.large}) {
		border-radius: 10px;
		background-color: #101010f2;
	}
`;

export const Title = styled.h1`
	font-size: 1.3rem;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const AmountsPayment = styled.section`
	width: 80%;

	p {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		text-transform: capitalize;
		margin: 10px 0px;
	}

	span {
		font-weight: bold;
	}
`;

export const Total = styled.h2`
	text-transform: uppercase;
	font-weight: 500;
	font-size: 0.9rem;

	span {
		font-weight: bold;
		font-size: 1.5rem;
		color: ${colors.font.accent};
	}
`;

export const BuyButton = styled(MainButton)`
	width: 100%;
`;
