/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return(
    <div  className={styles.container}>
      <div className={styles.item}>
         <h1 className={styles.title1}> Hello, I'm Jigmee W Sherpa .</h1>
         <h1 className={styles.title2}> I'm a fullstack web developer.</h1>
         <p className={styles.desc}>Turning your idea into reality, harnessing the power of both front-end magic and
           back-end wizardry, to create seamless and immersive digital experiences.
         </p>
      
        
         <Button url="/portfolio" text="See My Work"/>
 
       
         </div>
         <div className={styles.item}>
           <Image src={Hero}  alt='heromain pic' className={styles.img}/>
         </div>
  </div>
  );
 
}
