import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const defaultTheme = 'light';
const darkTheme = 'dark';

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    const oldTheme = getTheme();
    const newTheme = oldTheme === defaultTheme ? darkTheme : defaultTheme
    setTheme(newTheme);
    updateTheme(newTheme, oldTheme)

  }

  useEffect(() => {
    const theme = getTheme();
    if (!theme) {
      updateTheme(defaultTheme)
      setTheme(defaultTheme)
    }
    else {
      updateTheme(theme)
      setTheme(theme)
    }
  }, [])

  const getTheme = () => localStorage.getItem('theme')

  const updateTheme = (theme, themeToRemove) => {
    if (themeToRemove) document.documentElement.classList.remove(themeToRemove)
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme);
  }


  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider