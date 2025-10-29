import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("light");
    
    const toggleTheme = () => {
        const updateTheme = theme === "light" ? "dark" : "light";
        setTheme(updateTheme)
    }
    return (<ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>)
}



