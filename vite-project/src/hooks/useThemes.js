import { useContext } from "react";
import { ThemesContext } from "../contexts/theme.jsx";

export function useThemes() {
    return useContext(ThemesContext)
}