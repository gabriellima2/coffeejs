import styled from "styled-components";

import colors from "../../assets/colors";
import media from "../../assets/mediaQueries";


export const List = styled.ul`
    max-width: max-content;
    height: fit-content;
    padding: 5px 15px 15px 15px;
    margin-top: 50px;

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

export const Product = styled.li`
    width: 100%;
    height: fit-content;
    color: ${({theme}) => theme.fontColor};

    a {
        width: 100%;
        height: 100%;
    }
`;

export const ProductStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover, &:active {
        transition: all 0.1s ease-in;
        background-color: ${({theme}) => theme.transparent};
    }
`;

export const Image = styled.img`
    max-width: 90px;
    height: 90px;
    clip-path: circle();
    transform: translateY(-40px);

    @media screen and (min-width: ${media.default}) {
        max-width: 110px;
        height: 110px;
    }
`;

export const Property = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.fontColor};
    gap: 30px;
`;

export const Name = styled.h3`
    width: 100%;
    max-width: 120px;
    height: 45px;

    font-size: 0.9em;
    letter-spacing: 2px;
    font-weight: 400;
    text-align: center;

    @media screen and (min-width: ${media.default}) {
        height: 50px;
        font-size: 1em;
    }
`;

export const Price = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: ${colors.orange.default};
    margin-bottom: 15px;

    @media screen and (min-width: ${media.default}) {
        font-size: 1.4em;
    }
`;

export const Catalog = styled.section`
    height: 100%;
    padding: 40px 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.defaultColors.first};
`;
