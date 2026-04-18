import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode ? {
      background: '#1a1a1a',
      text: '#ffffff',
      primary: '#667eea',
    } : {
      background: '#ffffff',
      text: '#000000',
      primary: '#667eea',
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
