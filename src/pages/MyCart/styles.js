import styled from "styled-components";

import bgCartDesktop from "../../assets/img/background/bg-cart.png";
import bgCartMobile from "../../assets/img/background/bg-cart-mobile.png";

import { colors, mediaQueries } from "../../assets/styles";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background: url(${bgCartMobile});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: ${mediaQueries.large}) {
		display: flex;

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

	padding: 40px;

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

export const CheckoutContainer = styled.section``;
