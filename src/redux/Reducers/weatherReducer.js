// // weatherReducer

import { ADD_TO_FAVORITES, FETCH_HOURLY_WEATHER_FAILURE, FETCH_HOURLY_WEATHER_REQUEST, FETCH_HOURLY_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, REMOVE_FROM_FAVORITES } from "../Actions/actionType";

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
  favoriteCities: [], 
  hourlyData: [], 
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOURLY_WEATHER_REQUEST:
      // Handle the request action (e.g., show loading state)
      return state;

    case FETCH_HOURLY_WEATHER_SUCCESS:
        return {
          ...state,
          hourlyData: action.payload, // Update hourlyData with the fetched data
        };
  
    case FETCH_HOURLY_WEATHER_FAILURE:
      // Handle the failure action (e.g., show error state)
      return state;

    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload.weatherData,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter((city) => city !== action.payload),
      };
    default:
      return state;
  }
};

export default weatherReducer;




