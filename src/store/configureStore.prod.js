// Function called at the application entry point so that store is configured when the app starts
// Reducer needs to keep in touch with store in order to have a picture of the current store object or store representation

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
