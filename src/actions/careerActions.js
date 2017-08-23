import * as actionTypes from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import axios from "axios";
export function loadCareerSuccess(career) {
  return {
    type: actionTypes.LOAD_CAREER_SUCCESS,
    career
  };
}

export function loadCareer() {
  return dispatch => {
    dispatch(beginAjaxCall());

    if (process.env.NODE_ENV !== "production") {
      const srcOfloadCareer = require("../../server/app/career/data/my-career");

      try {
        dispatch(loadCareerSuccess(srcOfloadCareer));
      } catch (err) {
        dispatch(ajaxCallError(err));
        throw err;
      }
    } else {
      axios
        .get("api/career", {
          headers: { "Content-Type": "application/json" }
        })
        .then(response => {
          dispatch(loadCareerSuccess(response.data));
        })
        .catch(err => {
          dispatch(ajaxCallError(err));
          throw err;
        });
    }
  };
}
