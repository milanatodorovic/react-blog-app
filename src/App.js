import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import NewPost from "./components/newPost/NewPost";
import SinglePost from "./components/SinglePost";
import Posts from "./components/Posts/Posts";

function App(props) {
  /* const [postNew, setPostNew] = useState([]);
  const addPost = (header, content, username) => {
    const newPost = {
      id: uuidv4(),
      header: header,
      content: content,
      username: username,
    };

    setPostNew([...postNew, newPost]);
  };*/
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
        <Route
          path="/newpost"
          element={<NewPost /*addPost={addPost}*/ />}
        ></Route>
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
