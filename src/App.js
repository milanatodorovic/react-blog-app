import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import NewPost from "./components/newPost/NewPost";
import SinglePost from "./components/SinglePost";
import Posts from "./components/Posts/Posts";
import { uuid } from "uuidv4";
import { axiosInstance } from "./api/axios";

function App(props) {
  /*const [posts, setPosts] = useState(getPosts());
  const happy = useSelector((state) => state.happyReducer.happy);
  const angry = useSelector((state) => state.angryReducer.angry);
  const confused = useSelector((state) => state.confusedReducer.confused);
  const sad = useSelector((state) => state.sadReducer.sad);

  const fetchPostsHandler = async () => {
    try {
      const response = await axiosInstance.get("/posts?_limit=100");
      // console.log(response);
      const postsWithDate = response.data.map((item) => ({
        ...item,
        date: "25. September 2022.",
        reactions: {
          happy: { happy },
          sad: { sad },
          confused: { confused },
          angry: { angry },
        },
      }));
      setPosts(postsWithDate);
      console.log(posts);
    } catch (error) {
      //console.log(error);
      //console.log("greska u catchu");
    }
  };

  //local storage
  function getPosts() {
    //getting stored items

    const temp = localStorage.getItem("posts");
    const savedPosts = JSON.parse(temp);
    return savedPosts || [];
  }
  useEffect(() => {
    const temp = JSON.stringify(posts);
    localStorage.setItem("posts", temp);
  }, [posts]);
  /*
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
  };
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
        <Route
          path="/"
          element={
            <Posts /*fetchPostsHandler={fetchPostsHandler} posts={posts}*/ />
          }
        ></Route>
        <Route
          path="/posts"
          element={
            <Posts /*fetchPostsHandler={fetchPostsHandler} posts={posts}*/ />
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
