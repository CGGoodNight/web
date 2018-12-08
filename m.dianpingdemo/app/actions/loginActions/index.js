import {actionType} from '../../constants/actionType';

const loginIn = (user, pw) =>({
  type: actionType.loginPageType.LOGIN_IN,
  user,
  pw
})

export const checkUserAction = (user, pw) => {
  return dispatch => {
    // console.log(user, pw);
    //不论输入什么 都显示正确
    dispatch(loginIn(user, pw));
  }
}