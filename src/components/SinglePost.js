import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Posts/Main.css";
import { DELETE_POST } from "../redux-store/action/index";

const SinglePost = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const backToHomeHandler = () => {
    window.scrollTo(0, 0);
  };

  const deletePost = () => {
    dispatch({
      type: DELETE_POST,
      payload: posts.id,
    });

    return <p className="deleteMessage">This post has been deleted.</p>;
  };

  return (
    <>
      <div className="single-post-compt">
        <>
          <h1>{posts[id].title}</h1>

          <p>
            {posts[id].body}
            {posts[id].body}
            {posts[id].body}
            <br />
            {posts[id].body}
            <br />
          </p>
          <p>
            {posts[id].body}
            {posts[id].body}
            {posts[id].body}
            {posts[id].body}
          </p>

          <div className="span-div">
            <span>{posts[id].author}-</span>
            <span>{posts[id].email}</span>
          </div>

          <div className="bttns-wrapper">
            <button className="bttns" onClick={backToHomeHandler}>
              <Link className="bttnslink" to={`/posts`}>
                Home
              </Link>
            </button>

            <button className="button-17" onClick={deletePost}>
              Delete
            </button>
          </div>
        </>
      </div>
    </>
  );
};
export default SinglePost;
