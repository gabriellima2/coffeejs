import styled from "styled-components";

import { mediaQueries, colors } from "../../assets/styles";

import image from "../../../public/img/pizza-bg.jpg";

export const Main = styled.main`
	width: 100%;
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 70px;

	background: linear-gradient(to bottom right, #0f0f0fe3 0%, #000000d0 100%),
		url(${image});

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	position: relative;
`;

export const TextArea = styled.div`
	color: #f1f1f1;

	h1 {
		width: 100%;
		max-width: 350px;
		font-size: 1.9em;
		text-align: center;
		margin: 0 auto;

		@media screen and (min-width: ${mediaQueries.default}) {
			max-width: 500px;
			font-size: 2.3em;
		}
	}

	h2 {
		width: 90%;
		margin: 0 auto;
		text-align: center;
		font-size: 0.8em;
		font-weight: 400;
		margin-top: 10px;

		@media screen and (min-width: ${mediaQueries.default}) {
			font-size: 0.9em;
		}
	}
`;

export const Catalog = styled.section`
	width: fit-content;
	height: fit-content;

	margin: 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;

	padding: 30px;
`;

export const CatalogTitle = styled.h2`
	width: fit-content;

	color: #f1f1f1;
	text-transform: uppercase;

	position: relative;

	&::after {
		content: "";
		display: block;

		width: 70%;
		height: 2px;

		position: absolute;
		left: 0;
		bottom: -5px;

		background-color: ${colors.orange.default};
	}
`;

export const List = styled.ul`
	max-width: 100%;
	align-self: center;

	display: grid;
	grid-template-columns: repeat(1, minmax(auto, 300px));
	justify-items: center;
	gap: 25px;

	@media screen and (min-width: ${mediaQueries.default}) {
		grid-template-columns: repeat(3, minmax(auto, 300px));
	}
`;

export const Product = styled.li`
	width: 100%;

	border: 1px solid ${({ theme }) => theme.transparent};

	&:hover,
	&:active {
		transition: all 0.3s ease-in;
		background-color: ${({ theme }) => theme.transparent};
	}
`;

export const ProductData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	h2 {
		padding-bottom: 20px;
		color: ${colors.orange.default};
	}
`;

export const ProductImage = styled.img`
	max-width: 95%;
	margin-top: 5px;
`;

export const ProductTitle = styled.h1`
	font-size: 1.2em;
	text-align: center;

	@media screen and (min-width: ${mediaQueries.default}) {
		height: 60px;
	}
`;
