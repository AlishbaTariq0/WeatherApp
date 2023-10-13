// // actions.js

import { TOGGLE_SEARCH_BAR, REMOVE_FAVORITE_CITY } from './actionType';
import { FETCH_WEATHER_REQUEST , FETCH_WEATHER_SUCCESS , FETCH_WEATHER_FAILURE} from './actionType';
import { ADD_TO_FAVORITES } from './actionType';

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const fetchWeatherRequest = (cityName) => ({
  type: FETCH_WEATHER_REQUEST,
  payload: { cityName },
});

export const fetchWeatherSuccess = (weeklyData) => ({
  type: FETCH_WEATHER_SUCCESS,
  weeklyData,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  error,
});

// actions.js
export const addToFavorites = (cityData) => ({
  type: ADD_TO_FAVORITES,
  payload: cityData,
});

export const removeFavoriteCity = (cityName) => ({
  type: REMOVE_FAVORITE_CITY,
  payload: cityName,
});
