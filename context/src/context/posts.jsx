import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const postsContext = createContext();

export const usepostsContext = () => useContext(postsContext);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);


  return (
    <postsContext.Provider value={{ posts, setPosts }}>
      {children}
    </postsContext.Provider>
  );
};
