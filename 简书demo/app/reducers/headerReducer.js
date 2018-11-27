const defaultState = {
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,    //显示当前样式
  totalPage: 1,  //统计总的页数
  showBackTop: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SEARCH_INPUT_FOCUSED': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focused = true;
      return newState;
    };
    case 'SEARCH_INPUT_BLUR': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focused = false;
      return newState;
    }
    case 'SEARCH_GET_LIST': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list = action.list;
      newState.totalPage = action.totalPage;
      return newState
    }
    case 'MOUSEENTER': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.mouseIn = true;
      return newState;
    }
    case 'MOUSELEAVE': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.mouseIn = false;
      return newState;
    }
    case 'CHANGE_NEXT_LIST': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.page = action.page;
      return newState;
    }
    case 'TOGGLE_BACKTOP_SHOW': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.showBackTop = action.show;
      return newState;
    }
    default: 
      return state
  }
  
}