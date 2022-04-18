import styled from "styled-components";

import media from "../../assets/mediaQueries";

export const Title = styled.h1`
    text-align: center;
    font-size: 1.8em;

    padding: 20px;
`;

export const Main = styled.main`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 5px 15px;

    @media screen and (min-width: ${media.default}) {
        max-width: 1200px;
        max-height: 760px;

        padding: 5px 40px;

        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;

        align-self: center;
        overflow-y: auto;
    }
`;

export const Product = styled.section`
    width: 100%;
    max-width: 450px;

    display: grid;
    grid-template-columns: minmax(80px, 130px) 1fr;
    grid-template-rows: minmax(80px, auto);
    gap: 15px;

    padding: 10px 5px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Data = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr);
    place-items: center;
    gap: 10px;

    @media screen and (max-width: ${media.small}) {
        p {
            font-size: 0.9em;
        }
    }
`;

export const Remove = styled.button`
    padding: 8px;

    display: flex;
    align-items: center;

    font-size: 1.2em;

    border: none;
    background: none;

    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);

    &:hover {
        font-size: 1.3em;
    }

    @media screen and (max-width: ${media.small}) {
        top: 0px;
    }
`;
