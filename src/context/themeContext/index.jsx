import { createContext, useState } from "react";

import light from "../../assets/style/themes/light";
import dark from "../../assets/style/themes/dark";

export const themeContext = createContext({});

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
        <themeContext.Provider value={{themes, changeTheme}}>
            {children}
        </themeContext.Provider>
    );
}