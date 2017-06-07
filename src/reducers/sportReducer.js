import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function sportReducer(state = initialState.sports, action) {
  switch (action.type) {
    case actionTypes.LOAD_SPORTS_SUCCESS:

        // return Object.assign({}, state, {
        //     action.sports.career.viktor.jobs
        // });

        //return action.sports;

        const sports = [];

        action.sports.career.viktor.jobs.map((sport) => {
            let sportKeys = Object.keys(sport)[0];
            let sportProperties = sport[sportKeys];

            sportProperties.baseTitle = sportKeys;

            sports.push(sportProperties);
        });

        return sports;

    default:
      return state;
  }
}
