'use client'

import { ThemeContext } from '@/context/ThemeContext'
import { useContext, useState } from 'react'

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  return <div className={theme}>{children}</div>
}

export default ThemeProvider
