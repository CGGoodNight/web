import { actionType } from '../constants/actionType'
import axios from 'axios'

const getListAreaItem = (list) => ({
  type: actionType.headerType.SEARCH_GET_LIST,
  list,
  totalPage: Math.ceil(list.length / 10)
}) 

export const SeachInput_Focused = ()=> ({
  type: actionType.headerType.SEARCH_INPUT_FOCUSED
});

export const SeachInput_Blur = () => ({
  type: actionType.headerType.SEARCH_INPUT_BLUR
});

export const getListAreaAjax = () => {
  return (dispatch) => {
    axios.get('/public/header/SearchList.json').then( (res) => {
      dispatch(getListAreaItem(res.data));
    })
  }
}

export const listMouseEnter = () => ({
  type: actionType.headerType.MOUSEENTER
})

export const listMouseLeave = () => ({
  type: actionType.headerType.MOUSELEAVE
})

export const changeNextList = (page) => ({
  type: actionType.headerType.CHANGE_NEXT_LIST,
  page
})

export const toggleBackTop = (show) => ({
  type: actionType.headerType.TOGGLE_BACKTOP_SHOW,
  show
})