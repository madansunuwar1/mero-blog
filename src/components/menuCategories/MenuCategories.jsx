import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>style</Link>
    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.fashion}`}>fashion</Link>
    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.food}`}>food</Link>
    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.culture}`}>culture</Link>
    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.coding}`}>coding</Link>
    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
  </div>
  )
}

export default MenuCategories