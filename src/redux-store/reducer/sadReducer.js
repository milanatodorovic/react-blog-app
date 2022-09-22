const sadReducer = (state = { sad: 0 }, action) => {
  switch (action.type) {
    case "SAD":
      return {
        ...state,
        sad: state.sad + 1,
      };
    default:
      return state;
  }
};
export default sadReducer;
