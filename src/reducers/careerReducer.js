import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function careerReducer(state = initialState.career, action) {
  switch (action.type) {
    case actionTypes.LOAD_CAREER_SUCCESS: {
      const careerData = [];

      action.career.career.viktor.jobs.map(career => {
        let careerKeys = Object.keys(career)[0];
        let careerProperties = career[careerKeys];

        careerProperties.baseTitle = careerKeys;

        careerData.push(careerProperties);
      });

      return [...state, ...careerData];
    }
    default:
      return state;
  }
}
