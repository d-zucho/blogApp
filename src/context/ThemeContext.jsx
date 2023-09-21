'use client'
// needs to be client because we are using localStorage

import { createContext, useEffect, useState } from 'react'

// this is the equivalent to the createStore method of Redux
export const ThemeContext = createContext()

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    // this means that we are on the client
    const value = localStorage.getItem('theme')

    return value || 'light'
    // this means that if the value is null, we will return 'light' as the default value
  }
}

export const ThemeContextProvider = ({ children }) => {
  // ThemeContextProvider is a component that will wrap our entire application and provide the state to all components that require it.
  const [theme, setTheme] = useState(() => {
    // theme becomes an object because we are getting it from localStorage
    return getFromLocalStorage()
  })

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
  // ThemeContext.Provider is a component that accepts a value prop to be passed to consuming components that are descendants of this Provider.
}
