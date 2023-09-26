'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './mobileMenu.module.css'

import { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  // const [open, setOpen] = useState(false)
  // to handle the menu open and close on click
  return (
    <div className='mobile_menu_container'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  )
}

export default MobileMenu
