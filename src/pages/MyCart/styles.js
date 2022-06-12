import styled from "styled-components";

import { MainButton } from "../../GlobalStyles";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	padding: 15px;
`;

export const ContentText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`;

export const ProductsList = styled.ul``;

export const Summary = styled.main`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	position: fixed;
	bottom: 0;
	left: 0;

	padding: 20px;

	background-color: #161616f2;
`;

export const AmountsPayment = styled.section``;

export const Total = styled.h2``;

export const BuyButton = styled(MainButton)`
	width: 100%;
`;
