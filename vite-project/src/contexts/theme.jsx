import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../lib/themes";

export const ThemesContext = createContext();
export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
    localStorage.setItem("mountedComponent", false);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
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

//
//
// import { ReactNode, createContext, useContext, useState } from "react";

// interface IThemeContext {
//   isDark: boolean;
//   toggleTheme: () => void;
// }

// export const ThemeContext =
//   (createContext < IThemeContext) | (undefined > undefined);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error("context error");
//   }

//   return context;
// };

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
