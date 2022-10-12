import style from "../newPost/NewPost.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_POST } from "../../redux-store/action";
import { useNavigate } from "react-router-dom";
const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const addNewPostsHandler = ({ username, title, body }) => {
    const newWritenPost = {
      id: Date.now(),
      username: username,
      title: title,
      body: body,
      date: "25. September 2022.",
      reactions: {
        happy: 0,
        angry: 0,
        confused: 0,
        sad: 0,
      },
      author: "Milana Todorović",
      email: "milana2005@gmail.com",
    };

    dispatch({
      type: ADD_NEW_POST,
      payload: newWritenPost,
    });
    console.log("uspjesno", posts);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if ((title, body)) {
      addNewPostsHandler({ title, body });
      setTitle("");
      setBody("");
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

          <button
            type="submit"
            className={style.button}
            onClick={() => navigate(-1)}
          >
            Post Now
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
