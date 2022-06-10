import styled from "styled-components";
import colors from "../../assets/styles/colors";

export const Container = styled.section`
	border-bottom: 1px solid #b3b3b340;

	padding: 10px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Data = styled.div`
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
