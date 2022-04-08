import styled from "styled-components";

import colors from "../../assets/colors";

export const Container = styled.span`
    display: flex;
    align-items: center;

    p {
        padding: 0px 15px;
    }
`;

export const Decrement = styled.button`
    padding: 10px 15px;
    border: 1px solid ${({theme}) => theme.transparent};
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    color: ${({theme}) => theme.fontColor};;
    cursor: pointer;
    background: none;

    &:active {
        background-color: ${colors.blue};
    }
`;

export const Increment = styled(Decrement)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
`;
