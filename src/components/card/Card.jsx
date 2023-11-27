import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>25.02.2023</span>-
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime
          dignissimos ipsa at doloremque illo officiis obcaecati unde assumenda
          numquam vitae ipsam itaque, error laboriosam, praesentium quisquam
          distinctio qui repudiandae.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
