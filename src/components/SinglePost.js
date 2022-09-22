import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../api/axios";
import "./Posts/Main.css";
const SinglePost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

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

  return (
    <>
      <div className="single-post-compt">
        {post !== null ? (
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
              {/*Pozivam vise puta zbog izgleda */}
            </p>

            <div className="span-div">
              <span>{user.name}-</span>
              <span>{user.email}</span>
            </div>
          </>
        ) : (
          <p>No post </p>
        )}
      </div>
    </>
  );
};
export default SinglePost;
