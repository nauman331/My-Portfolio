import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Retrieve theme from localStorage or default to false
        const savedTheme = localStorage.getItem('theme');
        return savedTheme !== null ? JSON.parse(savedTheme) : false;
    });

    const StoreTheme = (ThemeValue) => {
        const newTheme = !ThemeValue;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    useEffect(() => {
        // Store the theme in localStorage whenever it changes
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <AuthContext.Provider value={{ StoreTheme, theme }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useTheme = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useTheme used outside the provider");
    }
    return authContextValue;
};
