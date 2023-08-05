/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from'./page.module.css'


const page = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <Link href="/blog/ironman" className={styles.container}>

   <Image
        src="https://res.cloudinary.com/dxig9eqix/image/upload/v1687082719/peakpx_wwfrom.jpg"
        alt=''
        width={350}
        height={250}
        className={styles.imageB}
        />
   
        
    
        <div className={styles.content}>
          <h1 className={styles.title}>Unleashing the Iron Man Within</h1>
          <p className={styles.desc}>Robert Downey Jr.'s portrayal of Tony Stark in the Iron Man movies, along with his personal journey, has profoundly influenced my decision to pursue a career in software engineering. Tony Stark's genius and technological prowess showcased the power of software engineering and inspired me to explore the world of coding and development.  </p>
        </div>
        </Link>
        <Link href="/blog/nature" className={styles.container}>
     
        <Image
        src="https://res.cloudinary.com/dxig9eqix/image/upload/v1687083121/beautiful-scenery-pathway-forest-with-trees-covered-with-frost_181624-42376_zoxisb.avif"
        alt=''
        width={350}
        height={250}
        className={styles.imageB}
        />
        
        <div className={styles.content}>
          <h1 className={styles.title}>Nature's Call: Inspiring Beauty, Humanity's Responsibility</h1>
          <p className={styles.desc}>This blog explores the captivating beauty and healing power of nature while raising awareness about the destructive impact of human actions on the environment. It emphasizes the crucial importance of protecting and preserving nature for the well-being of our planet and future generations.</p>
        </div>
        </Link>
        <Link href="/blog/hustle" className={styles.container}>
        
        <Image
        src="https://res.cloudinary.com/dxig9eqix/image/upload/v1687084035/beautiful-architecture-building-tokyo-cityscape-2_ds3hwn.jpg"
        alt=''
        width={350}
        height={250}
        className={styles.imageB}
        />
  
        <div className={styles.content}>
          <h1 className={styles.title}>Let the man grow with hustle 💯</h1>
          <p className={styles.desc}> Hustle is the key to success in today's competitive world. It involves dedication, persistence, and focus, even when faced with unpleasant tasks. By embracing discomfort, prioritizing growth, and working silently, hustlers overcome obstacles and achieve their goals. Success is earned through hard work, adaptability, and the ability to let results speak for themselves. Embrace the hustle and conquer your dreams. </p>
        </div>
        </Link>
      </div>
      
        
      </div>

  );
}

export default page
