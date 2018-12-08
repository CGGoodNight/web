import { actionType } from '../constants/actionType'
const defaultState = {
  homeheaderList: '',
  homeheaderLike: ''
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.homeHeaderType.GET_HOME_HEADER_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.homeheaderList = action.res;
      return newState;
    };
    case actionType.homeHeaderType.GET_HOME_HEADER_LIKE_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.homeheaderLike = action.res;
      return newState;
    };
    case actionType.homeHeaderType.GET_HOME_LOAD_MORE_INFO: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.homeheaderLike = newState.homeheaderLike.concat(action.res);
      return newState;
    };
    default: 
      return state;
  }
} 