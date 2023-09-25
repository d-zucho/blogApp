'use client'

import Image from 'next/image'
import styles from './themeToggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext)

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: 'grey' }
          : { backgroundColor: 'grey' }
      }
    >
      <Image src='/moon.png' alt='' width={20} height={20} />
      <div
        className={styles.switch}
        style={
          theme === 'dark'
            ? { right: 1, background: 'white' }
            : { left: 1, background: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='' width={22} height={22} />
    </div>
  )
}

export default ThemeToggle
