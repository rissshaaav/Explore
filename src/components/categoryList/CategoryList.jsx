import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("CategoryList: failed to fetch categories");
  }
  return res.json();
};
const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item._id}
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
          >
            {item.img && <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />}
            {item.title}
          </Link>
        ))}
        {/* <Link
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
        </Link> */}
      </div>
    </div>
  );
};

export default CategoryList;
