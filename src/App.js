import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import NewPost from "./components/newPost/NewPost";
import SinglePost from "./components/SinglePost";
import Posts from "./components/Posts/Posts";
import { axiosInstance } from "./api/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function App(props) {
  /*const [users, setUsers] = useState([]);
  const posts = useSelector((state) => state.posts);

  const fetchUsersHandler = async () => {
    try {
      const response = await axiosInstance.get("/users");
      console.log(response);
      //[posts.userId]
      setUsers(response.data.name);
      console.log("users:", users);
    } catch (error) {
      // console.log(error);
      console.log("greska u catchu");
    }
  };

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  /*
  const DeletePostHandler = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        fetchPostsHandler();
      });
    });
  };

  useEffect(() => {
    DeletePostHandler();
  }, []);

  const DeletePostHandler = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => console.log("Delete successful"));
  };
*/

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
        <Route path="/" element={<Posts /*users={users}*/ />}></Route>
        <Route
          path="/posts"
          element={
            <Posts
            /* users={
                users
              } /*fetchPostsHandler={fetchPostsHandler} posts={posts}*/
            />
          }
        ></Route>
        <Route
          path="/newpost"
          element={<NewPost /*addNewPosts={addNewPosts}*/ />}
        ></Route>
        <Route
          path="/posts/:id"
          element={
            <SinglePost /*fetchPostsHandler={fetchPostsHandler} posts={posts}*/
            />
          }
        />
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
