import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../api/axios";
import "./Posts/Main.css";
const SinglePost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [view, setView] = useState(true);
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
  const deleteHandler = () => {
    setView(false);
    return <p>This post has been deleted.</p>;
  };

  /* const deleteHandler = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) =>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })*/

  return (
    <>
      <div className="single-post-compt">
        {view === true && post !== null ? (
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

            <button onClick={deleteHandler}>Delete</button>
          </>
        ) : (
          <p>This post has been deleted. </p>
        )}
      </div>
    </>
  );
};
export default SinglePost;
