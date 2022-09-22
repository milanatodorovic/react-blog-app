const confusedReducer = (state = { confused: 0 }, action) => {
  switch (action.type) {
    case "CONFUSED":
      return {
        ...state,
        confused: state.confused + 1,
      };
    default:
      return state;
  }
};

export default confusedReducer;
