import * as actionTypes from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

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
      $.ajax({
        type: "GET",
        url: "api/career",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(
        career => {
          dispatch(loadCareerSuccess(career));
        },
        err => {
          dispatch(ajaxCallError(err));
          throw err;
        }
      );
    }
  };
}
