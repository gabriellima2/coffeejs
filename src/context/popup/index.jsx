import { createContext, useState } from "react";

import Popup from "../../components/Popup";

export const popup = createContext({});

export function PopupContext({children}) {
    const [ isVisible, setIsVisible ] = useState(false);

    const showPopup = () => setIsVisible(true);

    const hidePopup = () => setIsVisible(false);

    return (
        <popup.Provider value={{
            isVisible,
            showPopup,
            hidePopup
        }}>
            {children}
            <Popup />
        </popup.Provider>
    );
}
