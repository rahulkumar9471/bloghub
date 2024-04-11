import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { AuthContext } from "../context/AuthProvider";   
import { SidebarContext } from "../context/SidbarProvider";

export const useTheme = () => useContext(ThemeContext); 
export const useSidebar = () => useContext(SidebarContext); 
export const useAuth = () => useContext(AuthContext);
 