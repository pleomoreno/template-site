import { createContext, useState } from "react";


type ThemeContextType = {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
    
export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    
    const toggleDarkTheme = () => {
        setDarkTheme(!darkTheme)
    };
    
    return (
        <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
            {children}
        </ThemeContext.Provider>

    )
}