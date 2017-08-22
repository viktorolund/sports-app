import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function newsReducer(state = initialState.news, action) {
  switch (action.type) {
    case actionTypes.NEWS_LOADED: {
      return { ...state, ...action.news };
    }
    default:
      return state;
  }
}
