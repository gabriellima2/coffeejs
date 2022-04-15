import { createContext, useState } from "react";

import Popup from "../../components/Popup";

export const PopupContext = createContext({});

export function PopupContextProvider({children}) {
    const [ isVisible, setIsVisible ] = useState(false);

    const showPopup = () => setIsVisible(true);

    const hidePopup = () => setIsVisible(false);

    return (
        <PopupContext.Provider value={{
            isVisible,
            showPopup,
            hidePopup
        }}>
            {children}
            <Popup />
        </PopupContext.Provider>
    );
}
