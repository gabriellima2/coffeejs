import styled from "styled-components";

import bgCartDesktop from "../../assets/img/background/bg-cart.png";
import bgCartMobile from "../../assets/img/background/bg-cart-mobile.png";

import { colors, mediaQueries } from "../../assets/styles";

const BACKGROUND_OPACITY = {
	95: "f2",
	75: "bf",
};

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background: url(${bgCartMobile});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;
		height: 100vh;

		padding: 0px 15px;

		background: url(${bgCartDesktop});
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media screen and (min-width: ${mediaQueries.large}) {
		display: grid;
		grid-template-columns: 1fr 400px;
		grid-template-rows: 90% auto;
		gap: 15px;
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

export const ProductsOnCart = styled.section`
	width: 100%;

	ul {
		overflow-y: auto;
		max-height: 600px;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		grid-column: 1/2;
		grid-row: 1/4;

		border-bottom: 1px solid ${colors.utils["dark-gray"][300]};
	}
`;

export const ShoppingSummary = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	padding: 10px;

	border: 1px solid ${colors.utils["dark-gray"][300]};

	background-color: ${colors.utils["dark-gray"][100] + BACKGROUND_OPACITY[75]};

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;
		justify-content: center;

		position: relative;

		padding: 15px;
		border-top-right-radius: 10px;
	}
`;

export const Back = styled.span`
	align-self: flex-start;
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

		position: absolute;
		top: 15px;

		font-size: 1.7rem;

		a {
			gap: 10px;
		}

		span {
			font-size: 1rem;
		}
	}
`;

export const BuyerDataForm = styled.section`
	position: sticky;
	bottom: 0;
	order: 1;

	border-top: 1px solid ${colors.utils["dark-gray"][300]};
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	background-color: ${colors.utils["dark-gray"][100] + BACKGROUND_OPACITY[95]};

	@media screen and (min-width: ${mediaQueries.medium}) {
		width: 50%;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;

		padding: 10px;
		position: static;

		border-radius: 0;
		border-bottom-right-radius: 10px;
	}
`;
