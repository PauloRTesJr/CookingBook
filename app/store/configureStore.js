// Redux Store Configuration
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configureStore = initialState => {
  const middleware = applyMiddleware(thunk, loggingMiddleware);

  return createStore(() => {}, initialState, middleware);
};

const loggingMiddleware = store => next => action => {
  console.info(
    "%cINFO:",
    "color: yellow",
    `Dispatching a ${action.type} action with payload:`,
    action.payload
  );
  const result = next(action);
  console.info("%cNext State:", "color: cyan", store.getState());
  return result;
};

export default configureStore;
