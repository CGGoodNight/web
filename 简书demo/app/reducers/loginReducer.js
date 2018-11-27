import { actionType } from '../constants/actionType'

const defaultState = {
  login: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.loginType.LOGIN_SUCCESS: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.login = true;
      return newState;
    };
    case actionType.loginType.EXIT_LOGIN: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.login = false;
      return newState;
    };
    default: 
      return state
  }
  
}