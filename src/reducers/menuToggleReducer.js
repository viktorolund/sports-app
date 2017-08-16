import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function menuToggleReducer(
  state = initialState.menuActive,
  action
) {
  if (action.type === actionTypes.TOGGLE_MENU) {
    return !state;
  } else {
    return state;
  }
}
