import style from "../newPost/NewPost.module.css";
import { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_POST } from "../../redux-store/action";
const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [newPost, setNewPost] = useState(getNewPosts());

  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  /*function getNewPosts() {
    const temp = localStorage.getItem("newPost");
    const savedNewPosts = JSON.parse(temp);

    return savedNewPosts || [];
  }
  useEffect(() => {
    const temp = JSON.stringify(newPost);
    localStorage.setItem("newPost", temp);*/

  /*const allPostsTogether = posts.map((item) => ({
      ...item,
      newPost,
    }));

    if (allPostsTogether) {
      dispatch({
        type: ADD_NEW_POST,
        payload: allPostsTogether,
      });
    } else {
      console.log("neuspjesno");
    }
  }, [newPost]);
*/
  const addNewPostsHandler = ({ username, email, title, body }) => {
    const newWritenPost = {
      id: Date.now(),
      username: username,
      email: email,
      title: title,
      body: body,
      date: "25.9.2022.",
      reactions: {
        happy: 0,
        angry: 0,
        confused: 0,
        sad: 0,
      },
      // author: "Milana",
      // gmail: "email adresa",
    };

    dispatch({
      type: ADD_NEW_POST,
      payload: newWritenPost,
    });
    console.log("uspjesno", posts);
    /*const allPostsTogether = posts.unshift(newWritenPost);

    if (allPostsTogether) {
      dispatch({
        type: ADD_NEW_POST,
        payload: posts.unshift(newWritenPost),
      });
      console.log("uspjesno", posts);
    } else {
      console.log("neuspjesno");
    }*/
    // posts.push(newWritenPost);
    //setNewPost([...newPost, newWritenPost]);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if ((username, email, title, body)) {
      addNewPostsHandler({ username, email, title, body });
      setTitle("");
      setUsername("");
      setEmail("");
      setBody("");
      console.log("pojedinacno:", username, email, title, body);
      //console.log("newPost state:", newPost);
    } else {
      alert("Please fill the inputs.");
    }
  };

  /*const allPostsTogether = posts.map((item) => ({
    ...item,
    newP: posts + newPost,
  }));

  if (allPostsTogether) {
    dispatch({
      type: ADD_NEW_POST,
      payload: allPostsTogether,
    });
    console.log("uspjesno", posts);
  } else {
    console.log("neuspjesno");
  }*/
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
            name="title"
            value={username}
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
          <label>Title</label>
          <input
            type="text"
            placeholder="title here..."
            className={style.title}
            // ref={titleRef}
            value={title}
            onChange={onChangeTitle}
            name="title"
          />
          <label>Content</label>
          <input
            type="text"
            placeholder="body here..."
            className={style.body}
            // ref={bodyRef}
            value={body}
            onChange={onChangeBody}
          />

          <button type="submit" className={style.button}>
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
