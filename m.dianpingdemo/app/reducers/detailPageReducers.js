import { actionType } from "../constants/actionType";
const defaultState = {
  detailInfo: '',
  comment: ''
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.detailPageType.GET_BUSINESS_DATA: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.detailInfo = action.data;
      return newState;
    }
    case actionType.detailPageType.GET_COMMENT_INFO: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.comment = action.data;
      return newState;
    } 
    default: 
      return state;
  }
}