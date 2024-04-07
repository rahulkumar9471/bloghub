import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { AuthContext } from "../context/AuthProvider";
// import { SidebarContext } from "../context/ToggleSidebar";

export const useTheme = () => useContext(ThemeContext);
export const useAuth = () => useContext(AuthContext);