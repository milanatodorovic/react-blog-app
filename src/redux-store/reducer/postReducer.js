import { SET_ALL_POSTS } from "../action/index";

const initalState = {
  posts: [],
  reactions: 0,
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        posts: state.initalState.posts === action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
