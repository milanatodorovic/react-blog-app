import allReactionsReducers from "./reducer/reactionsReducers";
import { createStore } from "redux";
const store = createStore(
  allReactionsReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
