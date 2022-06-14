import styled from "styled-components";

import bgCartDesktop from "../../assets/img/background/bg-cart.png";
import bgCartMobile from "../../assets/img/background/bg-cart-mobile.png";

import { colors, mediaQueries } from "../../assets/styles";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 20px;

	background: url(${bgCartMobile});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: 1fr 0.4fr;
		grid-template-rows: 1fr auto;

		background: url(${bgCartDesktop});
	}
`;

export const Text = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;

	padding: 20px;

	h1 {
		font-size: 1.4rem;
	}
`;

export const ProductsContainer = styled.section`
	ul {
		min-height: 600px;
		max-height: 600px;
		overflow-y: auto;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 80%;
	}
`;

export const CheckoutFormContainer = styled.section`
	position: sticky;
	bottom: 0;
	order: 1;

	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	background-color: #141414f2;

	@media screen and (min-width: ${mediaQueries.large}) {
		height: fit-content;

		position: static;
		order: 0;

		padding: 10px;

		border-radius: 5px;
		background-color: #14141480;
	}
`;

export const CheckoutSummaryContainer = styled.section`
	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 40px 50px 25px 50px;

		border-top-right-radius: 10px;

		background-color: #10101066;
	}
`;

export const Back = styled.span`
	position: absolute;
	top: 75px;
	left: 15px;

	font-size: 1.1rem;

	a {
		display: flex;
		align-items: center;
	}

	span {
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 1px;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 260px;

		position: static;

		font-size: 1.7rem;

		a {
			gap: 10px;
		}

		span {
			font-size: 1rem;
		}
	}
`;
