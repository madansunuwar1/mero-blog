import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' width={50} height={50}></Image>
          <h1 className={styles.logoText}>Mero Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ab numquam assumenda aliquam impedit. Unde iure porro nihil
            qui, quidem maxime mollitia quam tempora vero earum, tenetur 
            quia. Quasi porro ut eligendi! Cum?
        </p>
        <div className={styles.icon}>
        <Image src='/facebook.png' width={18} height={18} />
        <Image src='/instagram.png' width={18} height={18} />
        <Image src='/tiktok.png' width={18} height={18} />
        <Image src='/youtube.png' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href='/'>homepage</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>About</Link>
        <Link href='/'>contact</Link>
        </div>
        <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href='/'>fashion</Link>
        <Link href='/'>coding</Link>
        <Link href='/'>food</Link>
        <Link href='/'>travel</Link>
        </div>
        <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href='/'>facebook</Link>
        <Link href='/'>instagram</Link>
        <Link href='/'>tiktok</Link>
        <Link href='/'>youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
