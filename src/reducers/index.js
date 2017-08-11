import { combineReducers } from 'redux'
import career from './careerReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'
import menuActive from './menuToggleReducer'

const rootReducer = combineReducers({
  career,
  ajaxCallsInProgress,
  menuActive
})

export default rootReducer
