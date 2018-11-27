//首页头部
const headerType = {
  SEARCH_INPUT_FOCUSED: 'SEARCH_INPUT_FOCUSED',  //搜索库聚焦
  SEARCH_INPUT_BLUR: 'SEARCH_INPUT_BLUR',        //搜索框失去焦点
  SEARCH_GET_LIST: 'SEARCH_GET_LIST',
  MOUSEENTER: 'MOUSEENTER',
  MOUSELEAVE: 'MOUSELEAVE',
  CHANGE_NEXT_LIST: 'CHANGE_NEXT_LIST',
  TOGGLE_BACKTOP_SHOW: 'TOGGLE_BACKTOP_SHOW'
}

const homeType = {
  GET_HOME_LIST: 'GET_HOME_LIST',
  GET_MORE_LIST: 'GET_MORE_LIST'
}

const detailType = {
  GET_DETAIL_LIST: 'GET_DETAIL_LIST'
}

const loginType = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  EXIT_LOGIN: 'EXIT_LOGIN'
}


export const actionType = {
  headerType,
  homeType,
  detailType,
  loginType
};