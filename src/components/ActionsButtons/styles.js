import styled from "styled-components";

import media from "../../assets/mediaQueries";
import colors from "../../assets/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    p {
        padding: 0px 15px;
    }
`;

export const ToggleQuantity = styled.span`
    display: flex;
    align-items: center;
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

export const AddToCart = styled.button`
    border: none;
    padding: 15px;
    border-radius: 5px;

    font-family: 'Space Mono', monospace;
    font-size: 0.7em;
    font-weight: bold;
    letter-spacing: 2px;

    cursor: pointer;
    background-color: #F8A423;

    &:hover {
        transition: all 0.2s ease;
        background-color: #D68C18;
    }

    @media screen and (min-width: ${media.default}) {
        font-size: 0.8em;
        padding: 15px 20px;
    }
`;
