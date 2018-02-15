// Redux Store Configuration
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import {loggingMiddleware} from "./middlewares/logging.middleware";

const configureStore = initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, loggingMiddleware));
};

export default configureStore;
