import style from "../newPost/NewPost.module.css";
import { useRef, useState } from "react";
const NewPost = (props) => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const headerRef = useRef();
  const contentRef = useRef();
  const usernameRef = useRef();

  /*const formSubmitHandler = (e) => {
    const onChangeHeader = (e) => {
      e.preventDefault();
      setHeader(...header, headerRef.current.target.value);
    };
    const onChangeContent = (e) => {
      setContent(...content, contentRef.current.target.value);
    };
    const onChangeUsername = (e) => {
      setUsername(...username, usernameRef.current.target.value);
    };
  };
  /* const formSubmitHandler = (e) => {
    e.preventDefault();
    if ((header, content, username)) {
      props.addPost(header, content, username);
      /* setHeader("");
      setContent("");
      setUsername("");
    } else {
      alert("Please write item");
    }
    console.log(header, content, username);
  };
*/
  return (
    <>
      <div className={style.div}>
        <h1 className={style.h1}>
          Share your knowledge by creating <br />
          your own post!
        </h1>

        <form /*onSubmit={formSubmitHandler} */ className={style.form}>
          <h2 className={style.h2}>Type your information here:</h2>
          <label>Name</label>
          <input
            type="text"
            placeholder="Text here..."
            className={style.input}
            value={username}
            ref={usernameRef}
            //onChange={onChangeUsername}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Email here..."
            className={style.input}
          />

          <h2 className={style.h2}>Write your post here:</h2>
          <label>Header</label>
          <input
            type="text"
            placeholder="Header here..."
            className={style.header}
            ref={headerRef}
            value={header}
            //   onChange={onChangeHeader}
          />
          <label>Content</label>
          <input
            type="text"
            placeholder="Content here..."
            className={style.content}
            ref={contentRef}
            value={content}
            //   onChange={onChangeContent}
          />

          <button
            type="submit"
            /* onClick={formSubmitHandler}*/
            className={style.button}
          >
            Post Now
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
