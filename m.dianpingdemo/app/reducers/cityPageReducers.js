import { actionType } from "../constants/actionType";
const defaultState = {
  cityList: [

  ],
  currentCity: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.cityPageType.GET_CITY_LIST:
      {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cityList = action.data;
        return newState;
      };
      case actionType.cityPageType.CHANGE_CURRENT_CITY: {
        const newState = JSON.parse(JSON.stringify(state));
        newState.currentCity = action.cityName;
        return newState;
      }
    default:
        return state;
  }
}