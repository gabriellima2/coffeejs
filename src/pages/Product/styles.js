import styled from "styled-components";

import { Title } from "../../components/Text/Title";

import { colors } from "../../assets/styles";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;

	font-family: "Montserrat", sans-serif;

	img {
		height: 50%;
		width: 100%;
	}
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
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
	}

	h2 {
		max-width: 330px;
		font-size: 0.9rem;
		font-weight: 400;
	}
`;

export const Price = styled.div`
	margin-top: 20px;

	p {
		font-weight: bold;
		font-size: 2.1rem;
		color: ${colors.font.accent};
	}

	small {
		font-weight: 500;
		color: ${colors.utils["light-gray"][200]};

		span {
			font-weight: bold;
		}
	}
`;

export const AddToCartButton = styled.button`
	border: none;
	border-radius: 5px;

	font-weight: 600;
	font-size: 1.1rem;

	padding: 17px 49px;

	cursor: pointer;
	background-color: ${colors.accent.red};

	&:hover {
		transition: all 0.2s ease-in;
		opacity: 0.8;
	}
`;

export const Reviews = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;

	margin: 30px 0px;
	padding: 30px 25px;
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
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
