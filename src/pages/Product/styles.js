import styled from "styled-components";

import { Title } from "../../GlobalStyles";

import bg_desktop from "../../assets/img/background/bg-product.png";
import bg_mobile from "../../assets/img/background/bg-product-mobile.png";

import { colors, mediaQueries } from "../../assets/styles";

export const Container = styled.div`
	background: url(${bg_mobile});
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (min-width: ${mediaQueries.medium}) {
		background: url(${bg_desktop});
		background-size: cover;
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		padding: 70px;
	}
`;

export const Main = styled.main`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;

	font-family: "Montserrat", sans-serif;

	img {
		height: 50%;
		width: 100%;
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 65px;

		margin-top: 100px;

		img {
			max-width: 600px;
			box-shadow: 25px 25px 0px ${colors.utils["dark-gray"][100]};
		}
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		place-items: center;

		display: grid;
		grid-template-columns: repeat(2, minmax(auto, 1fr));
		gap: 100px;

		margin: 100px;

		img {
			justify-self: end;
			height: 100%;
		}
	}
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		justify-self: start;
	}
`;

export const ProductData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	text-align: center;

	h1 {
		font-size: 1.2rem;
		text-transform: capitalize;
		text-align: center;
		color: ${colors.font.accent};
		letter-spacing: 1px;
	}

	h2 {
		max-width: 330px;
		font-size: 0.9rem;
		font-weight: 500;
		color: ${colors.utils["light-gray"][200]};
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		h1 {
			font-size: 1.3rem;
		}

		h2 {
			font-size: 1rem;
			max-width: 400px;
		}
	}

	@media screen and (min-width: ${mediaQueries["xx-large"]}) {
		gap: 20px;

		h1 {
			font-size: 1.4rem;
		}

		h2 {
			font-size: 1.1rem;
		}
	}
`;

export const Price = styled.div`
	margin-top: 15px;

	p {
		font-weight: bold;
		font-size: 2.1rem;
		color: ${colors.font.accent};
	}

	small {
		font-size: 0.7rem;
		font-weight: 500;
		color: ${colors.utils["light-gray"][200]};

		span {
			font-weight: bold;
		}
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		p {
			font-size: 2.3rem;
		}

		small {
			font-size: 0.8rem;
		}
	}
`;

export const Reviews = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;

	margin: 30px 20px;
	padding: 30px 25px;

	border-top: 1px solid ${colors.utils["dark-gray"][200]};
`;

export const TitleReviews = styled(Title)``;

export const Rating = styled.section`
	display: flex;
	align-items: center;
	gap: 10px;

	font-family: "Montserrat", sans-serif;

	p {
		font-size: 1.6rem;
		font-weight: bold;
		color: ${colors.font.accent};
	}

	i {
		font-size: 1.1rem;
	}
`;

export const ReviewList = styled.ul`
	max-height: 400px;

	display: flex;
	flex-direction: column;
	gap: 15px;

	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(204, 204, 204, 0.74);
	}

	li:focus {
		border: 1px solid #f1f1f1;
		outline: 1px solid #f1f1f1;
	}
`;
