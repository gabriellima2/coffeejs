import styled from "styled-components";

import colors from "../../assets/colors";
import media from "../../assets/mediaQueries";

export const Container = styled.li`
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.fontColor};

    a {
        width: 100%;
        height: 100%;
    }
`;

export const ProductStyle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 1px solid ${colors.green};

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
    color: #F5A507;
    margin-bottom: 15px;

    @media screen and (min-width: ${media.default}) {
        font-size: 1.4em;
    }
`;

