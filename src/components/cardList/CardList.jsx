import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const getData = async (page, cat) => {
  const API_BASE_URL = process.env.API_BASE_URL ? `https://${process.env.API_BASE_URL}` : "http://localhost:3000";
  const res = await fetch(`${API_BASE_URL}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("CardList: failed to fetch posts");
  }
  return res.json();
};

const CardList = async({page, cat}) => {
  const data = await getData(page, cat);
  const POST_PER_PAGE = 3;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item)=>(
          <Card key={item._id} item={item}/>
        ))}
      </div>
      <Pagination page={page} hasPrev = {hasPrev}/>
    </div>
  )
}

export default CardList
