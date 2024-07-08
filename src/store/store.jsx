import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [theme, setTheme] = useState(false);
    const [show, setShow] = useState(false);

const StoreTheme = (ThemeValue) => {
    setTheme(ThemeValue);

}

const StoreNav = (NavValue) => {
    setShow(NavValue)

}

    return <AuthContext.Provider value={{ StoreTheme, theme, show, StoreNav }}>
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