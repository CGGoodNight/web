import { combineReducers } from 'redux'
import homeheaderReducer from './homeheaderReducer';
import cityPageReducer from './cityPageReducers';
import detailPageReducer from './detailPageReducers'
import loginPageReducer from './loginPageReducers'
const reducer =  combineReducers({
  homeheaderReducer,
  cityPageReducer,
  detailPageReducer,
  loginPageReducer
})

export default reducer