import { actionType } from '../constants/actionType'

const defaultState = {
  title: "",
  imgUrl: "",
  contextTitle: "",
  context: ""
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.detailType.GET_DETAIL_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.title = action.title;
      newState.imgUrl = action.imgUrl;
      newState.contextTitle = action.contextTitle;
      newState.context = action.context;
      return newState;
    }
    default: 
      return state
  }
  
}