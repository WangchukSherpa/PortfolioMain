import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/UserInterface" className={styles.item}>
          <span className={styles.title}>User Interface</span>
        </Link>
        <Link href="/portfolio/Fullstack" className={styles.item}>
          <span className={styles.title}>Fullstack Dev</span>
        </Link>
        <Link href="/portfolio/Backend" className={styles.item}>
          <span className={styles.title}>Backend Dev</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;