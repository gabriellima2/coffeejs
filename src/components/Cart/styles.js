import styled from "styled-components";

import media from "../../assets/mediaQueries";

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const Main = styled.main`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    @media screen and (min-width: ${media.default}) {
        
    }
`;

export const Product = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 15px;

    img {
        max-width: 100px;
    }

    @media screen and (min-width: ${media.default}) {
        max-width: 600px;
        justify-content: space-between;

        img {
            max-width: 150px;
        }
    }
`;

export const DataContainer = styled.div`
    height: 100px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    gap: 15px;

    padding: 5px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const Remove = styled.button`
    padding: 10px 0px;

    font-size: 0.9em;
    color: #fff;
    font-weight: bold;

    border: none;
    border-radius: 5px;

    cursor: pointer;
    background-color: red;

    &:hover {
        transition: all 0.2s ease;
        background-color: orangered;
    }
`;