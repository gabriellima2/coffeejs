import Header from "../Header";
import Footer from "../Footer";

import { useContext } from "react";
import { theme } from "../../context/theme";
import { ThemeProvider } from "styled-components";

import WrapperStyle from "./styles";

export default function Wrapper({ children }) {
    const { themes } = useContext(theme);
    
    return (
        <ThemeProvider theme={themes.currentTheme}>
            <WrapperStyle>
                <Header />
                {children}
                <Footer /> 
            </WrapperStyle>
        </ThemeProvider>
    );
}
