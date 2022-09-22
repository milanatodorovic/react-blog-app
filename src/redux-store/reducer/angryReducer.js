const angryReducer = (state = { angry: 0 }, action) => {
  switch (action.type) {
    case "ANGRY":
      return {
        ...state,
        angry: state.angry + 1,
      };
    default:
      return state;
  }
};

export default angryReducer;
