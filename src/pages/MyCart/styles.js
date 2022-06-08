import styled from "styled-components";

import { Button } from "../../GlobalStyles";

import { mediaQueries, colors } from "../../assets/styles";

const BG_COLOR_ALPHA = "f2";

export const Container = styled.main`
	width: 100%;
	height: 100%;

	padding: 30px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

export const Content = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: ${colors.bgColors.third};

	@media screen and (min-width: ${mediaQueries.medium}) {
		flex-direction: row;
		gap: 30px;

		padding: 20px;

		background: none;
	}
`;

export const Products = styled.section`
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	padding: 15px 20px;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-track {
		background-color: ${colors.bgColors.third};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${colors.bgColors.first};
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		width: 100%;
		max-height: 600px;
		overflow-y: auto;

		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

export const Product = styled.section`
	width: 100%;
	max-width: 450px;

	display: grid;
	grid-template-columns: minmax(80px, 130px) 1fr;
	grid-template-rows: minmax(80px, auto);
	gap: 15px;

	padding: 10px 5px;
	position: relative;

	background-color: ${colors.bgColors.first};

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		width: 100%;
		max-width: none;
	}
`;

export const Data = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(1fr);
	place-items: center;
	gap: 10px;
`;

export const Remove = styled.button`
	display: flex;
	align-items: center;

	font-size: 1.2em;

	padding: 8px;

	border: none;
	background: none;

	position: absolute;
	bottom: 0px;
	right: 15px;
	transform: translateX(50%);

	&:hover {
		font-size: 1.3em;
	}
`;

export const Card = styled.section`
	position: sticky;
	bottom: 0;

	padding: 20px;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	display: flex;
	flex-direction: column;
	gap: 30px;

	background-color: ${colors.bgColors.second}${BG_COLOR_ALPHA};

	a {
		color: #ccc;
		position: absolute;
		left: 15px;
		font-size: 2em;

		@media screen and (min-width: ${mediaQueries.default}) {
			top: 140px;
			left: 30px;
		}
	}

	h1 {
		text-align: center;
		font-size: 1.8em;
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		width: 500px;
		height: 500px;

		position: static;

		justify-content: space-between;

		padding: 40px 20px;

		background-color: ${colors.bgColors.first};
	}
`;

export const Details = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	@media screen and (min-width: ${mediaQueries.default}) {
		gap: 70px;
	}
`;

export const BuyButton = styled(Button)`
	background-color: #0575e6;
	color: #fff;

	&:hover {
		background-color: #0575e6ab;
	}
`;
