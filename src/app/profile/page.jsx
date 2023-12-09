import Card from "@/components/card/Card";
import { getAuthSession } from "@/utils/auth";
// import { headers } from "next/headers";
import Image from "next/image";
import styles from "./profile.module.css";

const getData = async () => {
  const session = await getAuthSession();
  const API_BASE_URL = process.env.API_BASE_URL ? `https://${process.env.API_BASE_URL}` : "http://localhost:3000";
  const res = await fetch(`${API_BASE_URL}/api/profile/${session.user.email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Profile: failed to fetch posts");
  }
  return res.json();
};
const Profile = async () => {
  const data = await getData();
  // const user = data.user;
  // const posts = data.posts;
  return (
    <div>
      <div className={styles.userInfoContainer}>
        <Image src={data?.image} alt="dp" width={100} height={100} className={styles.image}/>
        <div>
          <h1>Welcome, {data?.name}</h1>
          <p>Email: {data?.email}</p>
        </div>
      </div>
      <h2 className={styles.yourPosts}>Your posts:</h2>
      {data?.Post?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};
export default Profile;
