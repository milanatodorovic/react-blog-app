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

export const SET_ALL_POSTS = "SET_ALL_POSTS";

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
import axiosInstance from "../../api/axios";
export const SET_ALL_POSTS = "SET_ALL_POSTS";

export const SetAllPosts = async (dispatch) => {
  try {
    const response = await axiosInstance.get("/posts?_limit=100");
    // console.log(response);
    const postsWithDate = response.data.map((item) => ({
      ...item,
      date: "25. September 2022.",
      reactions: 0,
    }));

    if (postsWithDate) {
      dispatch({
        type: SET_ALL_POSTS,
        payload: postsWithDate,
      });
    } else {
      console.log("nije se fetchovalo");
    }
  } catch (error) {
    //console.log(error);
    console.log("greska u catchu");
  }*/
/*
export const SET_ALL_POSTS = "SET_ALL_POSTS";

export const SetAllPosts = (fetchedPosts) => {
  return {
    type: "SET_ALL_POSTS",
    payload: fetchedPosts,
  };
};
*/
