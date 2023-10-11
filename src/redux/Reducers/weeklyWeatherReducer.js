// reducers/weeklyWeatherReducer.js

import { FETCH_WEEKLY_WEATHER_FAILURE, FETCH_WEEKLY_WEATHER_REQUEST, FETCH_WEEKLY_WEATHER_SUCCESS } from "../Actions/actionType";

  
  const initialState = {
    cityName: '',
    weeklyData: [],
    loading: false,
    error: null,
  };
  
  const weeklyWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEEKLY_WEATHER_REQUEST:
        return {
          ...state,
          cityName: action.payload.cityName,
          loading: true,
          error: null,
        };
      case FETCH_WEEKLY_WEATHER_SUCCESS:
        return {
          ...state,
          weeklyData: action.weeklyData,
          loading: false,
        };
      case FETCH_WEEKLY_WEATHER_FAILURE:
        return {
          ...state,
          error: action.error,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default weeklyWeatherReducer;
  