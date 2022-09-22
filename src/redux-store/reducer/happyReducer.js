const happyReducer = (state = { happy: 0 }, action) => {
  switch (action.type) {
    case "HAPPY":
      return {
        ...state,
        happy: state.happy + 1,
      };
    default:
      return state;
  }
};

export default happyReducer;
