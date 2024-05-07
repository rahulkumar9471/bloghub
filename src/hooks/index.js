import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { AuthContext } from "../context/AuthProvider";   
import { SidebarContext } from "../context/SidbarProvider";
import { NavFixedContext } from "../context/NavFixedProvider";

export const useTheme = () => useContext(ThemeContext); 
export const useSidebar = () => useContext(SidebarContext); 
export const useAuth = () => useContext(AuthContext);
export const useNavFixed = () => useContext(NavFixedContext)
 