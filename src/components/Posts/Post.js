import { Link } from "react-router-dom";
import { useState } from "react";
import cryingGif from "../../assets/crying.gif";
import happyGif from "../../assets/love.gif";
import confusedGif from "../../assets/puzzled.gif";
import silentGif from "../../assets/silent.gif";
import axiosInstance from "../../api/axios";

import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT_ANGRY,
  INCREMENT_HAPPY,
  INCREMENT_CONFUSED,
  INCREMENT_SAD,
} from "../../redux-store/action/index";

const Post = (props) => {
  //const [post, setPost] = useState([]);
  // const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const incrementHappyHandler = (id) => {
    dispatch({
      type: INCREMENT_HAPPY,
      payload: {
        postId: props.id,
      },
    });
  };

  const incrementSadHandler = (id) => {
    dispatch({
      type: INCREMENT_SAD,
      payload: {
        postId: props.id,
      },
    });
  };

  const incrementAngryHandler = (id) => {
    dispatch({
      type: INCREMENT_ANGRY,
      payload: {
        postId: props.id,
      },
    });
  };

  const incrementConfusedHandler = (id) => {
    dispatch({
      type: INCREMENT_CONFUSED,
      payload: {
        postId: props.id,
      },
    });
  };

  /*const fetchUsersHandler = async (e) => {
    try {
      const response = await axiosInstance.get("/users");
      //console.log(response);

      setUsers(response.data[userId].name);
    } catch (error) {
      // console.log(error);
      // console.log("greska u catchu");
    }
  };

  fetchUsersHandler();

  const { userId } = props;*/

  const topOfPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="post-wrapper">
        <div className="single-post">
          <div className="user-time">
            <span className="user"> {/*props.*/ props.author}</span>
            <span className="time">{props.date}</span>
          </div>

          <h1 className="title">{props.title}</h1>
          <p>{props.data}</p>
          <div className="InfoRed">
            <button className="button-48" onClick={topOfPage}>
              <Link to={`/posts/${props.id}`} className="text">
                Read More
              </Link>
            </button>
          </div>
          <div className="ReactionRed">
            <button onClick={incrementHappyHandler}>
              <img src={happyGif} alt="happy" />
              <span>{props.reactions.happy}</span>
            </button>
            <button onClick={incrementSadHandler}>
              <img src={cryingGif} alt="sad" />{" "}
              <span>{props.reactions.sad}</span>
            </button>
            <button onClick={incrementAngryHandler}>
              <img src={silentGif} alt="silent" />{" "}
              <span>{props.reactions.angry}</span>
            </button>
            <button onClick={incrementConfusedHandler}>
              <img src={confusedGif} alt="sad" />
              <span> {props.reactions.confused}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
