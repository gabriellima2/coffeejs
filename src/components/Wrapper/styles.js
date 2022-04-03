import styled from "styled-components";

const WrapperStyle = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px auto 155;


    color: ${({theme}) => theme.fontColor};
    background-color: ${({theme}) => theme.defaultColors.first};
`;

export default WrapperStyle;
