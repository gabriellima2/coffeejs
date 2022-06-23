import styled from "styled-components";
import { mediaQueries } from "../../../assets/styles";

export const ContainerAddress = styled.div`
	min-height: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	text-align: center;
	font-weight: 500;

	margin: 15px 0px;

	@media screen and (min-width: ${mediaQueries.medium}) {
		margin: 0px;
	}
`;

export const DynamicEvents = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	padding: 5px 0px 15px 0px;
`;
