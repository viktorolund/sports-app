import * as actionTypes from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// Action creator function wraps action in a function
export function loadSportsSuccess(sports) {
  // Action consists of an action type and some data
  return {
    type: actionTypes.LOAD_SPORTS_SUCCESS,
    sports
  };
}

export function loadSports() {
  return function(dispatch) {

    dispatch(beginAjaxCall());

    const srcOfSports = [
        {
            category: 'team sports',
            name: 'football',
            id: 4
        },
        {
            category: 'individual',
            name: 'tennis',
            id: 5
        }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], srcOfSports));
      }, 1000);
    }).then((sports) => {
        dispatch(loadSportsSuccess(sports));
    });

  };
}
