import styled from "styled-components";
import { mediaQueries } from "../../../assets/styles";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	font-family: "Montserrat", sans-serif;
	text-transform: capitalize;

	@media screen and (min-width: ${mediaQueries.large}) {
		gap: 20px;
	}
`;

export const Title = styled.h1`
	text-transform: uppercase;

	@media screen and (min-width: ${mediaQueries.large}) {
		display: none;
	}
`;

export const Text = styled.p`
	display: flex;
	justify-content: space-between;
	gap: 40px;

	font-weight: 500;
	font-size: 0.9rem;

	margin: 5px 0px;

	span {
		font-size: 1rem;
		font-weight: 600;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		font-size: 1rem;

		span {
			font-size: 1.2rem;
		}
	}
`;

export const Total = styled.h2`
	span {
		text-transform: uppercase;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media screen and (min-width: ${mediaQueries.large}) {
		font-size: 2rem;

		border-top: 1px solid #ffffff33;

		padding-top: 20px;

		span {
			font-size: 1rem;
		}
	}
`;
