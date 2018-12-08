import { actionType } from "../constants/actionType";

const defaultState = {
  isLogin: false,
  user: '',
  password: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.loginPageType.LOGIN_IN: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user = action.user;
      newState.password = action.pw;
      newState.isLogin = true;
      return newState;
    }
    default:
      return state;
  }
}