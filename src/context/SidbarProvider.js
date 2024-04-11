import React, { createContext, useState, useContext } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <SidebarContext.Provider value={{ toggleSidebar, isSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

export default SidebarProvider;

