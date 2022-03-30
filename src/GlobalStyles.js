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
        font-family: 'Space Mono', monospace;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;
