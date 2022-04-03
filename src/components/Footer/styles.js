import styled from "styled-components";

import media from "../../assets/mediaQueries";
import colors from "../../assets/colors";

export const FooterStyle = styled.footer`
    display: grid;
    grid-template-rows: 120px auto;
    background-color: ${({theme}) => theme.defaultColors.second};
`;

export const MainInformation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Nav = styled.nav`
    height: 100%;
`;

export const List = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

export const ListItem = styled.li`
    width: 100%;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid ${colors.blue};
        padding: 6px;
        font-size: 0.9em;
        color: ${({theme}) => theme.fontColor};

        &:hover {
            transition: all 0.2s ease-in;
            background-color: ${colors.blue};
        }

        @media screen and (min-width: ${media.default}) {
            padding: 8px;
            font-size: 1em;
        }
    }
`;

export const AreaDev = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.p`
    font-size: 0.8em;

    @media screen and (min-width: ${media.default}) {
        font-size: 1em;
    }
`;