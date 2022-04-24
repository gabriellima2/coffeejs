import styled from "styled-components";

import colors from "../../assets/colors";
import media from "../../assets/mediaQueries";

export const List = styled.ul`
	max-width: 100%;

	padding: 30px 20px;

	display: grid;
	grid-template-columns: repeat(1, minmax(auto, 300px));
	justify-items: center;
	gap: 25px;

	@media screen and (min-width: ${media.default}) {
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

export const Image = styled.img`
	max-width: 95%;
	margin-top: 5px;
`;

export const Title = styled.h1`
	font-size: 1.2em;
	text-align: center;

	@media screen and (min-width: ${media.default}) {
		height: 60px;
	}
`;
