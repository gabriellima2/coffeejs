import styled from "styled-components";

export const LogoStyle = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.4em;
    letter-spacing: 5px;
    color: ${({theme}) => theme.fontColor};
`;
