import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { items } from "./data.jsx";

const getData = (id) => {
  const data = items[id];

  if (data) {
    return data;
  }

  return notFound();
};
const BlogPost = ({params}) => {
  const data = getData(params.id);
  return (

    <div className={styles.container}>
      {
        data.map((item)=>(
          <div className={styles.item} key={item.id}>
    <div className={styles.top}>
      <div className={styles.info}>

      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
        <div className={styles.author}>
          <Image
          src={item.imageA}
          alt=""
          width={40}
          height={40}
          className={styles.avatar}
          />
          <span className={styles.username}>Jigmee W Sherpa</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
        src={item.imageC}
        alt=''
        fill={true}
        className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.text}>
        {<p className={styles.desc}>{item.content1}</p>}
        <br/>
        <br/>
        <br/>
        {<p className={styles.desc}>{item.t1}</p>}
        <br/>
        {<p className={styles.desc}>{item.content2}</p>}
        <br/>
        {<p className={styles.desc}>{item.t2}</p>}
        <br/>
        {<p className={styles.desc}>{item.content3}</p>}
        <br/>
        {<p className={styles.desc}>{item.t3}</p>}
        <br/>
        {<p className={styles.desc}>{item.content4}</p>}
        <br/>
        {<p className={styles.desc}>{item.t4}</p>}
        <br/>
        {<p className={styles.desc}>{item.content5}</p>}
        <br/>
        {<p className={styles.desc}>{item.t5}</p>}
        <br/>
        {<p className={styles.desc}>{item.content6}</p>}
        <br/>
        {<p className={styles.desc}>{item.p1}</p>}
        <br/>
        <br/>
        {<p className={styles.desc}>{item.p2}</p>}
        <br/>
        <br/>
        {<p className={styles.desc}>{item.p3}</p>}
        <br/>
        {<p className={styles.desc}>{item.p4}</p>}
        <br/>
        {<p className={styles.desc}>{item.p5}</p>}
        <br/>
        <br/>
        <br/>
        {<p className={styles.desc}>{item. conclusion}</p>}
        </div>
    </div>
    </div>
        ))}
    </div>
    
  )
}

export default BlogPost
