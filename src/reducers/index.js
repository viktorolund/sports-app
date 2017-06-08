import { combineReducers } from 'redux';
import career from './careerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  career,
  ajaxCallsInProgress
});

export default rootReducer;
