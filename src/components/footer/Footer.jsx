"use client"
import Image from 'next/image'
import styles from './footer.module.css'
import React from 'react'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div> ©2024 JWSherpa. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt='Jig'/>
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt='Jig'/>
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt='Jig'/>
      </div>
    </div>
  )
}

export default Footer
