import React from 'react';
import styles from './Banner.module.scss'

const Banner = (props) => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerBg}></div>
      <div className={styles.textBox}>
        <h2>REACT SHOPPING MALL</h2>
        <p>Hello1 Fashion, High Quality </p>
      </div>
    </section>
  )
};

export default Banner;