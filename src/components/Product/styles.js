import styled from "styled-components";

import { colors, mediaQueries } from "../../assets/styles";

export const Container = styled.section`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;

	font-family: "Montserrat", sans-serif;

	padding: 15px 10px;

	border-top: 1px solid ${colors.utils["dark-gray"][300]};

	background: ${({ bgColor }) => (!bgColor ? " #13131380" : "transparent")};

	p {
		font-weight: 600;
		font-size: 0.8rem;
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		padding: 20px 30px;

		p {
			font-size: 1rem;
		}
	}
`;

export const ProductData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	text-align: center;

	img {
		width: 90px;
		height: 90px;
	}

	p {
		font-weight: 600;
		font-size: 0.7rem;
		max-width: 125px;
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		img {
			width: 120px;
			height: 120px;
		}

		p {
			font-size: 0.9rem;
		}
	}
`;

export const ProductInfo = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 10px;
`;

export const Price = styled.p`
	display: flex;
	flex-direction: column;
	gap: 5px;

	text-align: center;
	text-transform: capitalize;

	span {
		font-size: 0.6rem;
		font-weight: 400;
		color: ${colors.utils["light-gray"][200]};
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		span {
			font-size: 0.9rem;
		}
	}
`;
