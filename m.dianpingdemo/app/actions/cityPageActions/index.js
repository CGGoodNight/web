import { actionType } from '../../constants/actionType';
import axios from 'axios';

const getCityList = (data) => ({
  type: actionType.cityPageType.GET_CITY_LIST,
  data
});

export const changeCurrentCityAction = (cityName) => ({
  type: actionType.cityPageType.CHANGE_CURRENT_CITY,
  cityName
})

export const getCityListAction = () => {
  return dispatch => {
    axios.get("/public/cityPage/city.json").then((res) => {
      const result = res.data.cityList;
      dispatch(getCityList(result));
    }).catch(() => {
      console.log('error');
    })
  }
}
