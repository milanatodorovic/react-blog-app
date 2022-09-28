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
  happyIncrement,
  sadIncrement,
  angryIncrement,
  confusedIncrement,
} from "../../redux-store/action/index";

const Post = (props) => {
  const [post, setPost] = useState([]);
  /* const happy = useSelector((state) => state.happyReducer.happy);
  const angry = useSelector((state) => state.angryReducer.angry);
  const confused = useSelector((state) => state.confusedReducer.confused);
  const sad = useSelector((state) => state.sadReducer.sad);
  const dispatch = useDispatch();
  const incrementHappyHandler = () => {
    dispatch(happyIncrement());
  };

  const incrementSadHandler = () => {
    dispatch(sadIncrement());
  };

  const incrementAngryHandler = () => {
    dispatch(angryIncrement());
  };

  const incrementConfusedHandler = () => {
    dispatch(confusedIncrement());
  };
  /*const [incrementAngry, setIncrementAngry] = useState(null);
  const [incrementConfused, setIncrementConfused] = useState(null);
  const [incrementHappy, setIncrementHappy] = useState(null);
  const [incrementSad, setIncrementSad] = useState(null);*/
  const [users, setUsers] = useState([]);
  //const [usersWithDate, setUsersWithDate] = useState([]);
  /*const incrementHappyHandler = (e) => {
    e.preventDefault();
    setIncrementHappy(incrementHappy + 1);
  };

  const incremenSadHandler = () => {
    setIncrementSad(incrementSad + 1);
  };

  const incrementAngryHandler = () => {
    setIncrementAngry(incrementAngry + 1);
  };

  const incrementConfusedHandler = () => {
    setIncrementConfused(incrementConfused + 1);
  };
*/
  const fetchUsersHandler = async () => {
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

  const { userId } = props;
  //const { id } = props;

  return (
    <>
      <div className="post-wrapper">
        <div className="single-post">
          <div className="user-time">
            <span className="user"> {users}</span>
            <span className="time">{props.date}</span>
          </div>

          <h1 className="title">{props.title}</h1>
          <p>{props.data}</p>
          <div className="InfoRed">
            <button className="button-48">
              <Link to={`/posts/${props.id}`} className="text">
                Read More
              </Link>
            </button>
          </div>
          <div className="ReactionRed">
            <button /*onClick={incrementHappyHandler}*/>
              <img src={happyGif} alt="happy" />
              <span>{}</span>
            </button>
            <button /*onClick={incrementSadHandler}*/>
              <img src={cryingGif} alt="sad" /> <span>{}</span>
            </button>
            <button /*onClick={incrementConfusedHandler}*/>
              <img src={silentGif} alt="silent" /> <span>{}</span>
            </button>
            <button /*onClick={incrementAngryHandler}*/>
              <img src={confusedGif} alt="sad" />
              <span> {}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
