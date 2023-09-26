'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './authLinks.module.css'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  // temporary
  const status = 'notAuthenticated'

  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link href='/login'>Login</Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className=''></div>
    </>
  )
}

export default AuthLinks
