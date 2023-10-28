import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    // Check if the 'darkMode' key exists in localStorage
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';

    const [darkMode, setDarkMode] = useState(storedDarkMode);

    // Use useEffect to update localStorage whenever darkMode changes
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle: toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
