import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../lib/themes";

function getThemeFromLocalStorage() {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    console.log(error);
    return "light";
  }
}

export const ThemesContext = createContext();
export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
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
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    localTheme && setTheme(localTheme);
    const localChecked = localStorage.getItem("mountedComponent");
    localChecked && setMountedComponent(localChecked);
  }, []);

  return (
    <ThemesContext.Provider
      value={{
        theme,
        setTheme,
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
