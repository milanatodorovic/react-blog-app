import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import NewPost from "./components/newPost/NewPost";
import SinglePost from "./components/SinglePost";
import Posts from "./components/Posts/Posts";
import { axiosInstance } from "./api/axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_ALL_POSTS } from "./redux-store/action/index";
import axios from "axios";

function App(props) {
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
        author: "Milana Todorović",
        email: "milana2005@gmail.com",
      }));
      console.log(posts);
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

  //local storage for posts
  function getPosts() {
    const temp = localStorage.getItem("posts");
    const savedPosts = JSON.parse(temp);
    return savedPosts || [];
  }
  useEffect(() => {
    const temp = JSON.stringify(posts);
    localStorage.setItem("posts", temp);
  }, [posts]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="a">
          Home
        </Link>

        <Link to="/newpost" className="a">
          New Post
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/newpost" element={<NewPost />}></Route>
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
      <div className="App">
        <footer>
          <div>
            <h1>Subscribe to newsletter</h1>
            <div className="newsletter">
              <input type="email" placeholder="Write here..." />
              <button className="button">Subscribe</button>
            </div>
          </div>

          <div className="privacy-policy">
            <span>Copyright ©2022 All rights reserved |</span>
            <a href="https://dotcomcanvas.de/en/policies/privacy-policy?utm_source=google&utm_medium=paid&utm_campaign=18032491326&utm_content=&utm_term=&gadid=&gclid=CjwKCAjwg5uZBhATEiwAhhRLHjjKKLBvnNZQ1r1o-ibuhpO7Bl5gi4wsitxhjAD_xdZE1Jov-yTYvxoCqzcQAvD_BwE">
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
