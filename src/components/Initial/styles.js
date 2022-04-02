import styled from "styled-components";

import media from "../../assets/mediaQueries";
import colors from "../../assets/colors";

import image from "../../img/background-image.jpg";
import imageDesktop from "../../img/background-image-desktop.jpg";

export const Main = styled.main`
    width: 100%;
    height: 80vh;

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

    @media screen and (min-width: ${media.default}) {
        background: linear-gradient(
            to bottom right, #0F0F0Fe3 0%, #000000d0 100%
        ), url(${imageDesktop});

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;

export const TextArea = styled.div`
    color: #f1f1f1;

    h1 {
        width: 100%;
        max-width: 300px;
        font-size: 1.8em;
        text-align: center;
        margin: 0 auto;

        @media screen and (min-width: ${media.default}) {
            max-width: 400px;
            font-size: 2.3em;
        }
    }

    h2 {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        font-size: 0.7em;
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
    background-color: ${colors.yellow};
    cursor: pointer;

    @media screen and (min-width: ${media.default}) {
        padding: 12px 25px;
        font-size: 1em;
    }
`;

export const Catalog = styled.section`
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CatalogContent = styled.div`
    max-width: max-content;
    height: 100%;
    padding: 5px 15px 15px 15px;
    margin-top: 50px;
    margin-bottom: 10px;

    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 340px));
    gap: 60px 25px;
    justify-content: center;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: ${({theme}) => theme.gradient};

    @media screen and (min-width: ${media.default}) {
        grid-template-columns: repeat(3, minmax(auto, 360px));
    }
`;
