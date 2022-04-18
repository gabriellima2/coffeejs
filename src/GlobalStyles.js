import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        width: 100%;
        height: 100%;

        color: ${({ theme }) => theme.fontColor};
        font-family: 'Space Mono', monospace;

        overflow-x: hidden;
        background-color: ${({ theme }) => theme.bgColors.second};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.fontColor};
    }

    li {
        list-style: none;
    }

    button {
        color: ${({ theme }) => theme.fontColor};
    }
`;

export default GlobalStyles;
