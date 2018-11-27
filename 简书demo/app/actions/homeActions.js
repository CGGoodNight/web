import { actionType } from '../constants/actionType'
import axios from 'axios';
const getHomeList = (res) => ({
  type: actionType.homeType.GET_HOME_LIST,
  res
});

const getMoreList = (res, articListPage) => ({
  type: actionType.homeType.GET_MORE_LIST,
  res,
  articListPage
})

export const getHomeListData = () => {
  return (dispatch) => {
    axios.get('/public/home/homeList.json').then( (res) => {
      dispatch(getHomeList(res.data));
    } )
    
  }
};

export const getMoreAarticList = (articListPage) => {
  return (dispatch) => {
    axios.get("/public/home/homeList2.json?page="+ articListPage + "").then( (res) => {
      dispatch(getMoreList(res.data,articListPage));
    })
  }
};