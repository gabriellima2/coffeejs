import styled from "styled-components";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.header`
	width: 100%;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	padding: 10px 40px;

	background-color: ${colors.bgColors.third};
`;

export const ActionButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	order: 2;
	padding: 10px 0px;

	@media screen and (min-width: ${mediaQueries.default}) {
		width: auto;
		justify-content: initial;
		gap: 30px;
		padding: initial;
	}

	button {
		padding: 5px 10px;
		border: none;
		font-size: 1em;
		cursor: pointer;
		background: none;
	}
`;

export const Cart = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	a {
		font-size: 1.1em;
	}
`;

export const ProductsTotal = styled.span`
	position: absolute;
	top: -8px;
	right: -10px;

	padding: 2px 5px;

	font-size: 0.7em;
	color: #000;

	border-radius: 50%;
	background-color: ${colors.blue};
`;
