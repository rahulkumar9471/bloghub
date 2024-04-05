import React, { createContext, useState } from 'react' 

export const SidebarContext = createContext();

const ToggleSidebar = ({ childern }) => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }

  return (
    <SidebarContext.Provider value={{ toggleSidebar }}>
        {childern}
    </SidebarContext.Provider>
  )
}

export default ToggleSidebar