import { combineReducers } from 'redux'
import headerReducer from '../reducers/headerReducer'
import homeReducer from '../reducers/homeReducer'
import detailReducer from './detailReducer'
import loginReducer from './loginReducer'
const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer