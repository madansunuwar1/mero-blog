import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPost.module.css'

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
    <Link href='/' className={styles.item}>
    {withImage && (<div className={styles.imageContainer}>
      <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>travel</span>
        <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>Phurba sherpa</span>
            <span className={styles.date}>20.23.1323</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
      {withImage && (<div className={styles.imageContainer}>
      <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>food</span>
        <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>Phurba sherpa</span>
            <span className={styles.date}>20.23.1323</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (<div className={styles.imageContainer}>
      <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>culture</span>
        <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>Phurba sherpa</span>
            <span className={styles.date}>20.23.1323</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (<div className={styles.imageContainer}>
      <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
      </div>)}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.coding}`}>coding</span>
        <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>Phurba sherpa</span>
            <span className={styles.date}>20.23.1323</span>
        </div>
      </div>
    </Link>
</div>
  )
}

export default MenuPost
