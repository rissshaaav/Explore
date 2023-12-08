import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const API_BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const res = await fetch(`${API_BASE_URL}/api/featuredPost`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("FeaturedPost: failed to fetch featured post");
  }
  return res.json();
};
const Featured = async () => {
  const postData = {
    title: "This is CISCO, we SECURE your CONNECT!!",
    catSlug: "coding",
    userEmail: "mishrishav@gmail.com",
  }
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hey, Enthusiasts!
        <br />
        Discover stories and creative ideas with
        <br />
        <b>Cisco Community VITB</b>.
      </h1>
      <div className={styles.post}>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image src="/inaugration.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <Link href={`/posts/${data?.slug}`}>
            <h1 className={styles.postTitle}>{data?.title}</h1>
          </Link>
          <Link href={`/posts/${data?.slug}`}>
            <p
              className={styles.postDesc}
              dangerouslySetInnerHTML={{
                __html: `${data?.desc.substring(0, 400)}...`,
              }}
            ></p>
          </Link>
          <Link href={`/posts/${data?.slug}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
