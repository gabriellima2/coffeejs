import styled from "styled-components";

import media from "../../assets/mediaQueries";
import colors from "../../assets/colors";

import image from "./img/pizza-bg.jpg";

export const Main = styled.main`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
        to bottom right, #0F0F0Fe3 0%, #000000d0 100%
    ), url(${image});

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`;

export const TextArea = styled.div`
    color: #f1f1f1;

    h1 {
        width: 100%;
        max-width: 350px;
        font-size: 1.9em;
        text-align: center;
        margin: 0 auto;

        @media screen and (min-width: ${media.default}) {
            max-width: 500px;
            font-size: 2.3em;
        }
    }

    h2 {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        font-size: 0.8em;
        font-weight: 400;
        margin-top: 10px;

        @media screen and (min-width: ${media.default}) {
            font-size: 0.9em;
        }
    }
`;

export const MostSoldButton = styled.a`
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 60px;
    font-size: 0.9em;
    color: #000;
    cursor: pointer;
    background-color: ${colors.orange.default};

    &:hover {
        transition: all 0.1s ease-in;
        background-color: ${colors.orange.hover};
    }

    @media screen and (min-width: ${media.default}) {
        padding: 12px 25px;
        font-size: 1em;
    }
`;

export const Catalog = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
`;
