import styled from "styled-components";

const WrapperStyle = styled.div`
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.fontColor};
    background-color: ${({theme}) => theme.defaultColors.first};
`;

export default WrapperStyle;
