import { useState, useEffect } from "react";

import { axiosInstance } from "../../api/axios";
import Post from "./Post";
import "./Main.css";
import LandingPage from "../LandingPage/LandingPage";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuidv4";
import { SetAllPosts } from "../../redux-store/action/index";

const Posts = (props) => {
  /* const [posts, setPosts] = useState(getPosts());
  const happy = useSelector((state) => state.happyReducer.happy);
  const angry = useSelector((state) => state.angryReducer.angry);
  const confused = useSelector((state) => state.confusedReducer.confused);
  const sad = useSelector((state) => state.sadReducer.sad);*/
  /*

  const fetchPostsHandler = async () => {
    try {
      const response = await axiosInstance.get("/posts?_limit=100");
      // console.log(response);
      const postsWithDate = response.data.map((item) => ({
        ...item,
        date: "25. September 2022.",
        reactions: 0,
      }));
    } catch (error) {
      //console.log(error);
      console.log("greska u catchu");
    }
  };

  const storeFetchPostsHandler = () => {
    dispatch(SetAllPosts(posts));
  };
  //fetchPostsHandler();
  /*
  //local storage
  function getPosts() {
    //getting stored items

    const temp = localStorage.getItem("posts");
    const savedPosts = JSON.parse(temp);
    return savedPosts || [];
  }
  useEffect(() => {
    //storing todo items

    const temp = JSON.stringify(posts);
    localStorage.setItem("posts", temp);
  }, [posts]);

  //adding posts to the API data
  const addNewPosts = (name, email, header, content) => {
    const newPost = {
      id: uuid(),
      name: name,
      header: header,
      content: content,
      email: email,
    };

    setPosts([...posts, newPost]);
  };*/

  /* props.fetchPostsHandler();*/

  const posts = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetAllPosts());
  });
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
