import * as actionTypes from './actionTypes'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'

export function loadCareerSuccess(career) {
  return {
    type: actionTypes.LOAD_CAREER_SUCCESS,
    career
  }
}

export function loadCareer() {
  return function(dispatch) {

    dispatch(beginAjaxCall())

    if (process.env.NODE_ENV !== 'production') {
        const srcOfloadCareer = require('../../server/app/career/data/my-career')

        return new Promise((resolve, reject) => {
            resolve(srcOfloadCareer)
        }).then((career) => {
            dispatch(loadCareerSuccess(career))
        }).catch(error => {
            dispatch(ajaxCallError(error))
            throw(error)
        })

    } else {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: 'api/career',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            })

        }).then((career) => {
            dispatch(loadCareerSuccess(career))
        }).catch(error => {
            dispatch(ajaxCallError(error))
            throw(error)
        })

    }

  }
}
