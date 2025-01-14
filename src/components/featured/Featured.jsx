import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b> Hello fellows </b> Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quasi explicabo repellat, dolores minus, placeat dolore
              in tempore aut alias sint possimus suscipit atque moles
              tias distinctio! repellat, dolores minus, placeat dolore
              in tempore aut alias sint possimus suscipit atque moles
              tias distinctio!</p>
              <button className={styles.button}>readmore</button>
        </div>
      </div>
    </div>
  )
}

export default Featured