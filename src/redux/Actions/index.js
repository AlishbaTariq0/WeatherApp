// actions.js

import { TOGGLE_SEARCH_BAR, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionType';
import { FETCH_WEATHER_REQUEST , FETCH_WEATHER_SUCCESS , FETCH_WEATHER_FAILURE} from './actionType';

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const addToFavorites = (cityName) => ({
  type: ADD_TO_FAVORITES,
  payload: cityName,
});

export const removeFromFavorites = (cityName) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: cityName,
});

export const fetchWeatherRequest = (cityName) => ({
  type: FETCH_WEATHER_REQUEST,
  payload: { cityName }, // Make sure cityName is correctly set in the payload
});


export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  error,
});