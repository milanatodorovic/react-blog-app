import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Posts/Main.css";

const SinglePost = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);

  const backToHomeHandler = () => {
    window.scrollTo(0, 0);
  };

  const selectedPost = posts.find((post) => post.id === +id);
  if (!selectedPost) {
    return null;
  }
  return (
    <>
      <div className="single-post-compt">
        <>
          <h1>{selectedPost.title}</h1>

          <p>{selectedPost.body}</p>

          <div className="span-div">
            <span>{selectedPost.author}-</span>
            <span>{selectedPost.email}</span>
          </div>

          <div className="bttns-wrapper">
            <button className="bttns" onClick={backToHomeHandler}>
              <Link className="bttnslink" to={`/posts`}>
                Home
              </Link>
            </button>
          </div>
        </>
      </div>
    </>
  );
};
export default SinglePost;
