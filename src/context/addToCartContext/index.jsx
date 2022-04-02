import { createContext, useState } from "react";

export const addToCartContext = createContext({
    total: null,
    addNewTotal: () => {}
});

export function AddToCartContextProvider({children}) {
    const [ total, setTotal ] = useState(0);

    const addNewTotal = (value) => {
        setTotal(value);
    }

    return (
        <addToCartContext.Provider value={{total, addNewTotal}}>
            {children}
        </addToCartContext.Provider>
    );
}
