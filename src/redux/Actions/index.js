// // actions.js

import { TOGGLE_SEARCH_BAR, REMOVE_FAVORITE_CITY, ADD_FAVORITE_CITY, ADD_CITY_WEATHER_TO_FAVORITES, FETCH_HOURLY_WEATHER_REQUEST, FETCH_HOURLY_WEATHER_SUCCESS, FETCH_HOURLY_WEATHER_FAILURE, SET_TEMPERATURE_UNIT, UPDATE_CITY_TEMPERATURE_UNIT } from './actionType';
import { FETCH_WEATHER_REQUEST , FETCH_WEATHER_SUCCESS , FETCH_WEATHER_FAILURE} from './actionType';
import { ADD_TO_FAVORITES } from './actionType';


export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const fetchWeatherRequest = (city) => ({
  type: FETCH_WEATHER_REQUEST,
  payload: { cityName: city }, // Send the searched city to the action
});


export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const addToFavorites = (cityData) => {
  console.log('Dispatching addToFavorites action with cityData:', cityData);

  // Rest of the action creator logic
  return {
    type: ADD_TO_FAVORITES,
    payload: cityData,
  };
};


export const removeFavoriteCity = (cityName) => ({
  type: REMOVE_FAVORITE_CITY,
  payload: cityName,
});

export const addFavoriteCity = (city) => {
  return {
    type: ADD_FAVORITE_CITY,
    city,
  };
};

export const addCityWeatherToFavorites = (cityWeather) => ({
  type: ADD_CITY_WEATHER_TO_FAVORITES,
  cityWeather,
});

export const fetchHourlyWeatherRequest = (cityName) => ({
  type: FETCH_HOURLY_WEATHER_REQUEST,
  payload: { cityName },
});

export const fetchHourlyWeatherSuccess = (data) => ({
  type: FETCH_HOURLY_WEATHER_SUCCESS,
  payload: { data },
});

export const fetchHourlyWeatherFailure = (error) => ({
  type: FETCH_HOURLY_WEATHER_FAILURE,
  payload: { error },
});

export const setTemperatureUnit = (unit) => {
  return {
    type: SET_TEMPERATURE_UNIT,
    unit,
  };
};