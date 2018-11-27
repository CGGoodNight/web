import { actionType } from '../constants/actionType'
const defaultState = {
  topicList: [],
  articleList: [],
  hotList: [],
  articListPage: 1
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.homeType.GET_HOME_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.topicList = action.res.topicList;
      newState.articleList = action.res.articleList;
      newState.hotList = action.res.hotList;
      return newState;
    };
    case actionType.homeType.GET_MORE_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.articleList = newState.articleList.concat(action.res.articleList);
      newState.articListPage = newState.articListPage + 1;
      return newState;
    };
    default:
      return state;
  }
}