import { useState } from "react";

import { axiosInstance } from "../../api/axios";
import Post from "./Post";
import "./Main.css";
import LandingPage from "../LandingPage/LandingPage";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchPostsHandler = async () => {
    try {
      const response = await axiosInstance.get("/posts?_limit=100");
      // console.log(response);
      const postsWithDate = response.data.map((item) => ({
        ...item,
        date: "25. September 2022.",
        reactions: {
          happy: 0,
          sad: 0,
          confused: 0,
          angry: 0,
        },
      }));
      // setPosts(response.data);
      setPosts(postsWithDate);
    } catch (error) {
      //console.log(error);
      //console.log("greska u catchu");
    }
  };

  fetchPostsHandler();

  return (
    <>
      <div>
        <LandingPage />
        <h1 className="posts-h1">
          Find 100+ best
          <br />
          posts right here!
        </h1>

        {posts.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            data={item.body.substring(0, 100) + "..."}
            id={item.id}
            userId={item.userId}
            date={item.date}
            reactions={item.reactions}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
