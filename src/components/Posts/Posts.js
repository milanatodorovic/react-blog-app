import { /*useState,*/ useEffect } from "react";

import Post from "./Post";
import "./Main.css";
import LandingPage from "../LandingPage/LandingPage";
import { useSelector, useDispatch } from "react-redux";
//import { v4 as uuid } from "uuidv4";
import { SET_ALL_POSTS } from "../../redux-store/action/index";

const Posts = (props) => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts ",
        { method: "GET" }
      );
      const posts = await response.json();
      const postsWithDate = posts.map((item) => ({
        ...item,
        date: "25. September 2022.",
        reactions: {
          happy: 0,
          sad: 0,
          angry: 0,
          confused: 0,
        },
        //author: "Milana",
      }));

      if (postsWithDate) {
        dispatch({
          type: SET_ALL_POSTS,
          payload: postsWithDate,
        });
      } else {
        console.log("nije se fetchovalo");
      }
    };
    fetchPosts();
  }, [dispatch]);

  console.log("posts:", posts);

  //local storage for posts
  /*function getPosts() {
    const temp = localStorage.getItem("posts");
    const savedPosts = JSON.parse(temp);
    return savedPosts || [];
  }
  useEffect(() => {
    const temp = JSON.stringify(posts);
    localStorage.setItem("posts", temp);
  }, [posts]);
*/
  // console.log(props.users);
  return (
    <>
      <div>
        <LandingPage />
        <h1 className="posts-h1">
          Find 100+ best
          <br />
          posts right here!
        </h1>

        {posts.map((data) => (
          <Post
            key={data.id}
            title={data.title}
            data={data.body /*.substring(0, 100) + "..."*/}
            id={data.id}
            date={data.date}
            reactions={data.reactions}
            //userId={data.userId}
            // author={data.author}
            // email={data.gmail}
            //users={props.users}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
