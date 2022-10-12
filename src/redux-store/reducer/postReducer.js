import {
  SET_ALL_POSTS,
  INCREMENT_HAPPY,
  INCREMENT_ANGRY,
  INCREMENT_CONFUSED,
  INCREMENT_SAD,
  ADD_NEW_POST,
} from "../action/index";

const initalState = {
  posts: [],
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case ADD_NEW_POST:
      const newPostsAdder = [...state.posts];
      newPostsAdder.unshift(action.payload);
      return {
        ...state,
        posts: newPostsAdder,
      };

    case INCREMENT_HAPPY:
      const newPosts = state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              happy: post.reactions.happy + 1,
            },
          };
        }
      });

      return {
        ...state,
        posts: newPosts,
      };

    case INCREMENT_ANGRY:
      const angryHandler = state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              angry: post.reactions.angry + 1,
            },
          };
        }
      });

      return {
        ...state,
        posts: angryHandler,
      };

    case INCREMENT_SAD:
      const sadHandler = state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              sad: post.reactions.sad + 1,
            },
          };
        }
      });

      return {
        ...state,
        posts: sadHandler,
      };

    case INCREMENT_CONFUSED:
      const confusedHandler = state.posts.map((post) => {
        if (action.payload.postId !== post.id) {
          return post;
        } else {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              confused: post.reactions.confused + 1,
            },
          };
        }
      });

      return {
        ...state,
        posts: confusedHandler,
      };
    default:
      return state;
  }
};

export default postReducer;
