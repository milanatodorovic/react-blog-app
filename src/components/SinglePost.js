import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { axiosInstance } from "../api/axios";
import "./Posts/Main.css";
import removePost, { DELETE_POST } from "../redux-store/action/index";
const SinglePost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [view, setView] = useState(true);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(post.id);
  useEffect(() => {
    const fetchBody = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        //console.log(error);
      }
    };
    fetchBody();
  }, [id]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        //console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  /* const DeletePostHandler = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        fetchBody();
      });
    });
  };
*/
  /*  useEffect(() => {
    deleteHandler();
  });

  const deleteHandler = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setView(false);
    return <p>This post has been deleted.</p>;
  };
  console.log(view);
  */

  /* const deleteHandler = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) =>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })*/

  const backToHomeHandler = () => {
    window.scrollTo(0, 0);
  };

  const deleteHandler = (id) => {
    posts.filter((post) => {
      return post.id !== id;
    });
    localStorage.removeItem(post.id);

    return <p className="deleteMessage">This post has been deleted.</p>;
  };
  const deletePost = () => {
    dispatch({
      type: DELETE_POST,
      payload: post.id,
    });
  };

  return (
    <>
      <div className="single-post-compt">
        {/* {view === true && post !== null ? (*/}
        <>
          <h1>{post.title}</h1>

          <p>
            {post.body}
            {post.body}
            {post.body}
            <br />
            {post.body}
            <br />
          </p>
          <p>
            {post.body}
            {post.body}
            {post.body}
            {post.body}
          </p>

          <div className="span-div">
            <span>{user.name}-</span>
            <span>{user.email}</span>
          </div>

          <div>
            <div>
              <button onClick={backToHomeHandler}>
                <Link to={`/posts`}>Back to Home</Link>
              </button>
            </div>
            <button onClick={deletePost}>Delete</button>
          </div>
        </>
        {/*) : (
        <p className="deleteMessage">This post has been deleted. </p>
         )}*/}
      </div>
    </>
  );
};
export default SinglePost;
