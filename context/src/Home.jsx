import React, { useContext } from "react";
import { usepostsContext } from "./context/posts";

const Home = () => {
  const { posts, setPosts } = usepostsContext()
//   console.log(posts);
  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id} >{post.id}.{post.title}</li>;
      })}
    </ul>
  );
};

export default Home;
