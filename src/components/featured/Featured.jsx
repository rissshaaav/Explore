import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hey, Enthusiasts!<br />Discover stories and creative ideas with<br /><b>Cisco Community VITB</b>.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/webex.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            This is CISCO, we SECURE your CONNECT!!
          </h1>
          <p className={styles.postDesc}>
            In the dynamic post pandemic modern world, success requires seamless online communication be it a billion dollar deal or a school project and cisco Webex takes it up a few notches by adding in additional features like messaging, whiteboard and even file sharing.
            In addition of allowing video conferencing of 1000 individuals Webex also provides facilities for webinars to a large mass all while maintaining the cyber security standards of Cisco which plays a major role in setting the benchmark for cyber security measures present in the market.
            In call messages and polling along with its compatibility with different operating software and devices make it a one stop solution especially for businesses for which time and easy access is of utmost importance.
            The international customer service enhances the experience for customers around the globe while also connecting them in high definition through different geographies and cultures all while providing various plans depending upon the scalability a firm has. It also contributes to the society by providing a free version so that people on a budget are not left behind.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
