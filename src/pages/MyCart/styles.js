import styled from "styled-components";

import bgCartDesktop from "../../assets/img/background/bg-cart.png";
import bgCartMobile from "../../assets/img/background/bg-cart-mobile.png";

import { colors, mediaQueries } from "../../assets/styles";

const BACKGROUND_OPACITY = {
	95: "f2",
	75: "bf",
};

const BORDER_DETAIL = `1px solid ${colors.utils["dark-gray"][300]}`;

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	max-height: fit-content;

	background: url(${bgCartMobile});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: ${mediaQueries.default}) {
		height: 100%;
		min-height: auto;
		max-height: auto;
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		padding: 0px 15px;

		background: url(${bgCartDesktop});
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media screen and (min-width: ${mediaQueries.default}) {
		height: 100%;
		min-height: 100vh;
		max-height: fit-content;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 350px auto;
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		grid-template-columns: 1fr 400px;
		grid-template-rows: minmax(400px, 55vh) 345px;

		padding-bottom: 25px;
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
	height: 100%;
	min-height: 50vh;

	ul {
		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-track {
			background: ${colors.utils["dark-gray"][100]};
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${colors.utils["dark-gray"][300]};
		}
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		min-height: auto;

		grid-column: span 2;
		grid-row: 2/3;

		border-bottom: none;
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		grid-column: 1/2;
		grid-row: span 2;

		ul {
			max-height: 100%;
			overflow-y: auto;
		}
	}
`;

export const ShoppingSummary = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;

	padding: 10px;

	position: relative;

	border: ${BORDER_DETAIL};
	background-color: ${colors.utils["dark-gray"][100] + BACKGROUND_OPACITY[75]};

	@media screen and (min-width: ${mediaQueries.default}) {
		width: 100%;

		padding: 15px;
		position: relative;
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		min-height: 300px;
		border-top-right-radius: 10px;

		grid-column: 2/3;
		grid-row: 1/2;
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

	@media screen and (min-width: ${mediaQueries.default}) {
		position: absolute;
		top: 15px;
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		width: 260px;

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
	width: 100%;
	order: 1;

	position: sticky;
	bottom: 0;

	border-top: ${BORDER_DETAIL};
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	background-color: ${colors.utils["dark-gray"][100] + BACKGROUND_OPACITY[95]};

	@media screen and (min-width: ${mediaQueries.default}) {
		position: static;

		border-radius: 0;
		border: ${BORDER_DETAIL};
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		padding: 10px;

		border-bottom-right-radius: 10px;
	}
`;
