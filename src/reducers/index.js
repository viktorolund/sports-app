import { combineReducers } from "redux";

import career from "./careerReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import menuActive from "./menuToggleReducer";
import news from "./newsReducer";

const rootReducer = combineReducers({
  career,
  ajaxCallsInProgress,
  menuActive,
  news
});

export default rootReducer;
