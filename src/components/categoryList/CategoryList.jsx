import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const API_BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const res = await fetch(`${API_BASE_URL}/api/categories`, {
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
      </div>
    </div>
  );
};

export default CategoryList;
