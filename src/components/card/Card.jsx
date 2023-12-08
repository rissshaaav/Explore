import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import parse from "html-react-parser";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image}/>
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
          -<span className={styles.category}>{item.catSlug.toUpperCase()}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {parse(item.desc.substring(0, 400) + "...")}
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
