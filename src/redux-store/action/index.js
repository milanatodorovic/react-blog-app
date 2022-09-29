/*export const happyIncrement = () => {
  return {
    type: "HAPPY",
  };
};

export const sadIncrement = () => {
  return {
    type: "SAD",
  };
};

export const confusedIncrement = () => {
  return {
    type: "CONFUSED",
  };
};

export const angryIncrement = () => {
  return {
    type: "ANGRY",
  };
};
*/

import axios from "axios";

export const SET_ALL_POSTS = "SET_ALL_POSTS";
export const INCREMENT_HAPPY = "INCREMENT_HAPPY";
export const INCREMENT_SAD = "INCREMENT_SAD";
export const INCREMENT_ANGRY = "INCREMENT_ANGRY";
export const INCREMENT_CONFUSED = "INCREMENT_CONFUSED";
export const DELETE_POST = "DELETE_POST";

export const SetAllPosts = () => {
  try {
    return async (dispatch) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=100",
        { method: "GET" }
      );
      const json = await response.json();
      const postsWithDate = json.data.map((item) => ({
        ...item,
        date: "25. September 2022.",
        reactions: 0,
      }));
      console.log(postsWithDate);

      if (postsWithDate) {
        dispatch({
          type: SET_ALL_POSTS,
          payload: postsWithDate,
        });
      } else {
        console.log("nije se fetchovalo");
      }
    };
  } catch (error) {
    //console.log(error);
    console.log("greska u catchu");
  }
};
/*
export const incrementHappy = (n) => {
  return {
    type: "INCREMENT_HAPPY",
    payload: {
      postId: id,
      reaction: happy,
    },
  };
};
*/
