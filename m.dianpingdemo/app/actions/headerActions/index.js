import { actionType } from '../../constants/actionType';
import axios from 'axios';
const getData = (res) => ({
  type: actionType.homeHeaderType.GET_HOME_HEADER_LIST,
  res
});

const getLikeData = res => ({
  type: actionType.homeHeaderType.GET_HOME_HEADER_LIKE_LIST,
  res
})

const loadMoreData = res => ({
  type: actionType.homeHeaderType.GET_HOME_LOAD_MORE_INFO,
  res
})



export const getDataAjax = () => {
  return (dispatch) => {
    axios.get("/public/homepage/homeheader.json").then((res) => {
      const result = res.data.homeheaderList;
      dispatch(getData(result));
    }).catch(() => {
      console.log('error');
    })
  }
}

export const getLikeDataAction = (page, city) => {
  return (dispatch) => {
    axios.get("/public/homepage/homeheaderLike.json?page="+ page +"&city="+ city +"").then((res) => {
      if (page === 1) {
        let result = res.data.homeheaderLike;
        let newres = result.slice(0, 3);
        dispatch(getLikeData(newres));
      }
    }).catch(() => {
      console.log('error');
    })
  }
}

export const getLoadMoreAction = (page, city) => {
  return (dispatch) => {
    axios.get("/public/homepage/homeheaderLike.json?page="+ page +"&city="+ city +"").then((res) => {
        let result = res.data.homeheaderLike;
        let newres = result.slice(3*(page - 1), 3*page);
        dispatch(loadMoreData(newres));
    }).catch(() => {
      console.log('error');
    })
  }
}