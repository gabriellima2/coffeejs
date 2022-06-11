import styled from "styled-components";

import { Title } from "../../components/Text/Title";

import { mediaQueries, colors } from "../../assets/styles";
import image from "../../assets/img/pizza-bg.jpg";

export const Main = styled.main`
	width: 100%;
	height: 75vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-transform: uppercase;
	text-align: center;
	font-size: 0.8rem;
	font-family: "Montserrat", sans-serif;

	background: url(${image});
	background-position: center;
	background-size: cover;

	img {
		max-width: 85%;
		align-self: flex-start;
	}
`;

export const TextArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	color: ${colors.font.white[100]};

	h1 {
		max-width: 400px;
	}

	a {
		font-weight: 600;
		font-size: 0.8rem;
		letter-spacing: 1px;

		color: ${colors.font.white[100]};
		opacity: 0.9;

		&:hover {
			transition: all 0.2s ease;
			opacity: 0.7;
		}
	}

	@media screen and (min-width: ${mediaQueries.default}) {
		align-self: flex-start;
		padding-left: 20px;
		font-size: 1.2rem;

		h1 {
			max-width: 600px;
		}

		a {
			font-size: 0.9em;
		}
	}
`;

export const Catalog = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;

	padding: 40px 20px;

	color: ${colors.font.black[100]};

	@media screen and (min-width: ${mediaQueries.medium}) {
		width: fit-content;
		margin: 0 auto;
	}
`;

export const CatalogTitle = styled(Title)`
	align-self: flex-start;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: 20px;

	@media screen and (min-width: ${mediaQueries.small}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: ${mediaQueries.medium}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const ListItem = styled.li`
	width: 200px;
	height: 295px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	border: 2px solid ${colors.accent.orange}${"3a"};

	padding: 10px;

	color: ${colors.font.black[100]};
	font-family: "Montserrat", sans-serif;

	img {
		width: 100%;
	}

	h1 {
		color: ${colors.font.white[100]};
		font-size: 0.9rem;
		text-align: center;
		word-break: normal;
	}

	h2 {
		color: ${colors.accent.orange};
	}
`;
