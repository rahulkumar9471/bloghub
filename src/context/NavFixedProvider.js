import React, { createContext, useEffect, useState } from 'react'

export const NavFixedContext = createContext();

const NavFixedProvider = ({ children }) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [navhidden, setNavhidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(
        scrollPosition > document.documentElement.clientHeight * 0.2
      );
      if (scrollPosition > 100) {
        setNavhidden(true);
      } else {
        setNavhidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavFixedContext.Provider value={{isHeaderFixed, navhidden}}>
      {children}
    </NavFixedContext.Provider>
  )
}

export default NavFixedProvider