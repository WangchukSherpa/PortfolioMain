"use client"
import styles from './navbar.module.css'
import Link from 'next/link'
import React from 'react'
import Button from '@/components/button/Button'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
const links=[
  {
    id:1,
    title:"Home",
    url:"/",
  },
  {
   id:2,
   title:"Portfolio",
   url:"/portfolio",
  },
  {
    id:3,
    title:"Blog",
    url:"/blog",
  },
  {
    id:4,
    title:"About",
    url:"/about",
  },
  {
  id:5,
  title:"Contact",
  url:"/contact",
  },
  {
    id:6,
    title:"Experience",
    url:"/experience",
    }
]
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>JWSherpa</Link>
      
      <div className={styles.links}>
        
        <DarkModeToggle/>
        {
        links.map(link=>(
        <Link
         key={link.id} href={link.url} className={styles.link}>
          {link.title}
        </Link>))
        }
          <Button url="https://res.cloudinary.com/dxig9eqix/image/upload/v1687271153/JigmeeCV1_mlbn77.pdf" text="Check My Resume" />
        
        </div>
    </div>
  )
}

export default Navbar;
