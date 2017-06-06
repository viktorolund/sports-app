import { combineReducers } from 'redux';
import sports from './sportReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  sports,
  ajaxCallsInProgress
});

export default rootReducer;
