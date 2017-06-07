import * as actionTypes from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSportsSuccess(sports) {
  return {
    type: actionTypes.LOAD_SPORTS_SUCCESS,
    sports
  };
}

export function loadSports() {
  return function(dispatch) {

    dispatch(beginAjaxCall());

    if (process.env.NODE_ENV !== 'production') {
        const srcOfSports = require('../../server/app/career/data/my-career');

        return new Promise((resolve, reject) => {
            resolve(Object.assign([], srcOfSports));
        }).then((sports) => {
            dispatch(loadSportsSuccess(sports));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });

    } else {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: 'api/career',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });

        }).then((sports) => {
            dispatch(loadSportsSuccess(sports));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });

    }

  };
}
