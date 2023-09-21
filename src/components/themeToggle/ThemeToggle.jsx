'use client'
// need to use client since we are using hooks

import Image from 'next/image'
import styles from './themeToggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={styles.container} onClick={() => toggle()}>
      <Image src='/moon.png' width={20} height={20} alt='moon' />
      <div
        className={styles.switch}
        style={
          theme === 'dark'
            ? { left: 2, backgroundColor: 'white' }
            : { right: 2, backgroundColor: 'white' }
        }
      />
      <Image src='/sun.png' width={20} height={20} alt='sun' />
    </div>
  )
}

export default ThemeToggle
