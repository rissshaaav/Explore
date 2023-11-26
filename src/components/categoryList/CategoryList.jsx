import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/Style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/Fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/Food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/Travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/Culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/Coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
