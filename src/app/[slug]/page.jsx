import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>Jhon Dow</span>
                <span className={styles.date}>26.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium reiciendis optio fugiat rerum! Illum modi quia rerum maxime iste, beatae provident explicabo harum dicta quaerat inventore reiciendis quod porro.</p>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium reiciendis optio fugiat rerum! Illum modi quia rerum maxime iste, beatae provident explicabo harum dicta quaerat inventore reiciendis quod porro.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium reiciendis optio fugiat rerum! Illum modi quia rerum maxime iste, beatae provident explicabo harum dicta quaerat inventore reiciendis quod porro.</p>
            </div>
            <div className={styles.comment}>
                <Comments/>
            </div>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default SinglePage;
