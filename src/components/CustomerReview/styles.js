import styled from "styled-components";

import { mediaQueries, colors } from "../../assets/styles";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;

	border-bottom: 1px solid #b3b3b340;

	padding: 10px;

	position: relative;
`;

export const UserPhoto = styled.span`
	align-self: center;
	font-size: 20px;

	@media screen and (min-width: ${mediaQueries.small}) {
		font-size: 30px;
	}
`;

export const Data = styled.div`
	width: fit-content;

	display: flex;
	gap: 15px;

	@media screen and (min-width: ${mediaQueries.small}) {
		gap: 25px;
	}
`;

export const Text = styled.div`
	small {
		color: ${colors.font["gray-light"]};
		font-size: 0.8rem;
	}
`;

export const Description = styled.p`
	font-size: 0.9rem;
	font-weight: 500;

	margin-top: 10px;
`;

export const Rating = styled.section`
	position: absolute;
	right: 0;
`;
