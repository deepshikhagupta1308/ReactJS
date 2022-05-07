import { createContext } from "react";
const themeContext = createContext("");

const ThemeProvider = themeContext.Provider;

export { themeContext, ThemeProvider };
