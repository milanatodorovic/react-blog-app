import {
  SET_ALL_POSTS,
  DELETE_POST,
  INCREMENT_HAPPY,
  INCREMENT_ANGRY,
  INCREMENT_CONFUSED,
  INCREMENT_SAD,
} from "../action/index";

const initalState = {
  posts: [],
  reactions: {
    happy: 0,
    sad: 0,
    angry: 0,
    confused: 0,
  },
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    case INCREMENT_HAPPY:
      return state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return {
            ...state,
            reactions: state.reactions.happy + action.payload,
          };
        }
      });

    case INCREMENT_ANGRY:
      return state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return state.reactions.angry + action.payload;
        }
      });

    case INCREMENT_SAD:
      return state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return state.reactions.sad + action.payload;
        }
      });

    case INCREMENT_CONFUSED:
      return state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return state.reactions.confused + action.payload;
        }
      });
    default:
      return state;
  }
};

export default postReducer;
