import { actionType } from '../constants/actionType'
import axios from 'axios'

const logined = () => ({
  type: actionType.loginType.LOGIN_SUCCESS
})

export const exitLogin = () => ({
  type: actionType.loginType.EXIT_LOGIN
})

export const login = (acc, pw) => {
  return (dispatch) => {
    axios.get("/public/login/login.json?acc=" + acc + "&pw=" + pw).then( (res) => {
     if(res.data.data) {
      dispatch(logined());
     }
    } )
  }
}