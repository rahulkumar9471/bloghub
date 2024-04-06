import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
// import { SidebarContext } from "../context/ToggleSidebar";

export const useTheme = () => useContext(ThemeContext);