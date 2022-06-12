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

export const Summary = styled.main`
	width: 100%;

	position: fixed;
	bottom: 0px;

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
	}
`;
