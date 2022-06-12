import styled from "styled-components";

import { MainButton } from "../../GlobalStyles";

import bgCartDesktop from "../../assets/img/background/bg-cart.png";
import bgCartMobile from "../../assets/img/background/bg-cart-mobile.png";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background: url(${bgCartMobile});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: ${mediaQueries.large}) {
		display: flex;

		padding: 0px 40px;

		background: url(${bgCartDesktop});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;

	margin-top: 100px;
	padding: 15px;

	@media screen and (min-width: ${mediaQueries.medium}) {
		padding: 20px 40px;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;
	}
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
	bottom: 0px;

	font-family: "Montserrat", sans-serif;

	padding: 20px;

	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: #161616f2;

	h1 {
		font-size: 1.3rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		width: 470px;
		height: fit-content;

		align-self: center;

		position: fixed;
		right: 0;
		bottom: 0;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 500px;
		height: fit-content;

		align-self: center;

		position: static;

		border-radius: 10px;
		background-color: #101010f2;
	}
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
