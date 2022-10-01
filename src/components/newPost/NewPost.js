import style from "../newPost/NewPost.module.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
const NewPost = (props) => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  /*  const headerRef = useRef();
  const contentRef = useRef();
  const usernameRef = useRef();*/

  const onChangeHeader = (e) => {
    setHeader(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [newPost, setNewPost] = useState(getNewPosts());

  function getNewPosts() {
    const temp = localStorage.getItem("newPost");
    const savedNewPosts = JSON.parse(temp);
    return savedNewPosts || [];
  }
  useEffect(() => {
    const temp = JSON.stringify(newPost);
    localStorage.setItem("newPost", temp);
  }, [newPost]);

  const addNewPostsHandler = ({ username, email, header, content }) => {
    const newWritenPost = {
      id: uuid(),
      username: username,
      email: email,
      header: header,
      content: content,
      date: "25.9.2022.",
    };

    setNewPost([...newPost, newWritenPost]);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if ((username, email, header, content)) {
      addNewPostsHandler({ username, email, header, content });
      setHeader("");
      setUsername("");
      setEmail("");
      setContent("");
      console.log("pojedinacno:", username, email, header, content);
      console.log("newPost state:", newPost);
    } else {
      alert("Please fill the inputs.");
    }
  };
  return (
    <>
      <div className={style.div}>
        <h1 className={style.h1}>
          Share your knowledge by creating <br />
          your own post!
        </h1>

        <form onSubmit={formSubmitHandler} className={style.form}>
          <h2 className={style.h2}>Type your information here:</h2>
          <label>Name</label>
          <input
            type="text"
            placeholder="Text here..."
            className={style.input}
            name="username"
            value={username}
            //ref={usernameRef}
            onChange={onChangeUsername}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Email here..."
            className={style.input}
            value={email}
            onChange={onChangeEmail}
          />

          <h2 className={style.h2}>Write your post here:</h2>
          <label>Header</label>
          <input
            type="text"
            placeholder="Header here..."
            className={style.header}
            // ref={headerRef}
            value={header}
            onChange={onChangeHeader}
            name="header"
          />
          <label>Content</label>
          <input
            type="text"
            placeholder="Content here..."
            className={style.content}
            // ref={contentRef}
            value={content}
            onChange={onChangeContent}
          />

          <button
            type="submit"
            // onClick={formSubmitHandler}
            className={style.button}
          >
            {/*<Link to="/posts" className={style.link} type="submit">*/}
            Post Now
            {/*</Link> */}
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
