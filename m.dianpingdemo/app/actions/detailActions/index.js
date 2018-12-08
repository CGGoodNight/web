import { actionType } from '../../constants/actionType';
import axios from 'axios';

const getBusinessInfo = (data) =>({
  type: actionType.detailPageType.GET_BUSINESS_DATA,
  data
}) 

const getCommentInfo = (data) => ({
  type: actionType.detailPageType.GET_COMMENT_INFO,
  data
})

export const getBusinessInfoAction = (id) => {
  return (dispatch) => {
    axios.get("/public/detailPage/detail.json?id="+ id +"").then((res) => {
      const result = res.data.data;
      dispatch(getBusinessInfo(result));
      
    }).catch(() => {
      console.log('error');
    })
  }
}

export const getCommentInfoAction = (id) => {
  return (dispatch) => {
    axios.get("/public/detailPage/comment.json").then((res) => {
      const result = res.data.data;
      dispatch(getCommentInfo(result));
      
    }).catch(() => {
      console.log('error');
    })
  }
}