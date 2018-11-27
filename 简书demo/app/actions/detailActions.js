import { actionType } from '../constants/actionType'
import axios from 'axios'

const getDetailList = (title, imgUrl, contextTitle, context) => ({
  type: actionType.detailType.GET_DETAIL_LIST,
  title,
  imgUrl,
  contextTitle,
  context
})

export const getDetailAjax  = (id) => {
  return (dispatch) => {
    axios.get("/public/detail/detail.json?id=" + id).then( (res) => {
      dispatch(getDetailList(res.data.title, res.data.imgUrl, res.data.contextTitle, res.data.context));
    } )
    
  }
}