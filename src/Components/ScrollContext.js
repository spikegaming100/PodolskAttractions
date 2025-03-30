import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
    const aboutRef = useRef(null);
    const attractionsRef = useRef(null);
    const feedbackRef = useRef(null);

    return (
        <ScrollContext.Provider value={{ aboutRef, attractionsRef, feedbackRef }}>
            {children}
        </ScrollContext.Provider>
    );
};
