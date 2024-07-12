import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [theme, setTheme] = useState(false);

const StoreTheme = (ThemeValue) => {
    setTheme(ThemeValue);

}



    return <AuthContext.Provider value={{ StoreTheme, theme }}>
        {children}
    </AuthContext.Provider>
}

export const useTheme = () => {
    const authContextValue = useContext(AuthContext)
    if(!authContextValue) {
        throw new Error("useTheme used outside the provider")
    }
    return authContextValue;
}