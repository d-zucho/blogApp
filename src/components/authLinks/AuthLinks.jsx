'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './authLinks.module.css'
import Image from 'next/image'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  // temporary
  const status = 'notAuthenticated'

  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link className={styles.link} href='/login'>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen((open) => !open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        {open && (
          <div className={styles.mobile_menu_container}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/login'>Login</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default AuthLinks
