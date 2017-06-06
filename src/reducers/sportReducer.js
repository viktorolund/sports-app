import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function sportReducer(state = initialState.sports, action) {
  switch (action.type) {
    case actionTypes.LOAD_SPORTS_SUCCESS:
      return action.sports;
    default:
      return state;
  }
}
