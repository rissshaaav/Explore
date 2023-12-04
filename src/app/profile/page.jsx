import Card from "@/components/card/Card";
import {headers} from "next/headers";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/profile", {
    method: "GET",
    headers: headers(),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Profile: failed to fetch posts");
  }
  return res.json();
};
const Profile = async () => {
  const data = await getData();
  const user = data.user;
  const posts = data.posts;
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      {posts?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};
export default Profile;
