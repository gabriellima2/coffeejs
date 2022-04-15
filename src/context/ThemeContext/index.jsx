import { createContext, useState } from "react";

import light from "../../assets/style/themes/light";
import dark from "../../assets/style/themes/dark";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
    const [themes, setThemes] = useState({
        type: "light",
        currentTheme: light
    });

    const changeTheme = () => {
        setThemes(themes.type === "light"  ?
            {
                type: "dark",
                currentTheme: dark
            } :
            {
                type: "light",
                currentTheme: light
            }
        );
    }

    return (
        <ThemeContext.Provider value={{themes, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}