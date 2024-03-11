import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../lib/themes";

export const ThemesContext = createContext();
export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const setMode = (mode) => {
    localStorage.setItem("light", mode);
    setTheme(mode);
    localStorage.setItem("mountedComponent", false);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("light");
    localTheme && setTheme(localTheme);
    const localChecked = localStorage.getItem("mountedComponent");
    localChecked && setMountedComponent(localChecked);
  }, []);

  return (
    <ThemesContext.Provider
      value={{
        theme,
        themeToggler,
        mountedComponent,
        setMountedComponent,
        themeMode,
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
};
