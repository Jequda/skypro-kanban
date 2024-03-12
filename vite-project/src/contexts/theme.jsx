import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../lib/themes";

export const ThemesContext = createContext();
export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const mountedComponent = theme === "light" ? true : false;

  const setMode = (mode) => {
    localStorage.setItem("light", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("light");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemesContext.Provider
      value={{
        theme,
        themeToggler,
        mountedComponent,
        themeMode,
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
};
