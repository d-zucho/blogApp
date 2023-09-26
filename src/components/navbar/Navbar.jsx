import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar_socials}>
        <Link href='www.facebook.com'>
          <Image src='/facebook.png' alt='Facebook' width={24} height={24} />
        </Link>
        <Link href='www.instagram.com'>
          <Image src='/instagram.png' alt='Instagram' width={24} height={24} />
        </Link>

        <Link href='www.tiktok.com'>
          <Image src='/tiktok.png' alt='TikTok' width={24} height={24} />
        </Link>

        <Link href='www.youtube.com'>
          <Image src='/youtube.png' alt='Youtube' width={24} height={24} />
        </Link>
      </div>

      <div className={styles.logo}>
        <p>Marik's Musings</p>
      </div>

      {/** Theme toggle && Nav Links */}
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href='/'>
          Homepage
        </Link>
        <Link className={styles.link} href='/about'>
          About
        </Link>
        <Link className={styles.link} href='/contact'>
          Contact
        </Link>
        <AuthLinks />
      </div>
      <div className={styles.hamburger_container}>
        <img src='/hamburger.svg' alt='' />
      </div>
    </div>
  )
}

export default Navbar
