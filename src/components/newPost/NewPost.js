import style from "../newPost/NewPost.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const NewPost = (props) => {
  /*const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const headerRef = useRef();
  const contentRef = useRef();
  const usernameRef = useRef();

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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (header.trim()) {
      props.addTodoProps(header);
      setHeader("");
    } else {
      alert("Please write item");
    }
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
            name="username"
            /* value={username}
            ref={usernameRef}
            onChange={onChangeUsername}*/
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Email here..."
            className={style.input}
            /* value={email}
            onChange={onChangeEmail}*/
          />

          <h2 className={style.h2}>Write your post here:</h2>
          <label>Header</label>
          <input
            type="text"
            placeholder="Header here..."
            className={style.header}
            /* ref={headerRef}
            value={header}
            onChange={onChangeHeader}*/
            name="header"
          />
          <label>Content</label>
          <input
            type="text"
            placeholder="Content here..."
            className={style.content}
            /* ref={contentRef}
            value={content}
            onChange={onChangeContent}*/
          />

          <button
            type="submit"
            /* onClick={formSubmitHandler}*/
            className={style.button}
          >
            <Link to="/posts" className={style.link}>
              Post Now
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
