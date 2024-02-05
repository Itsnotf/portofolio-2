"use client"
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContext Provider");
    }
    return context;
};

export const GlobalProvider = ({ children }) => {
    const [scrollTo, setScrollTo] = useState(null);

    const value = {
        scrollTo,
        setScrollTo,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};
