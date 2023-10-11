// actions/weatherActions.js
import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
  } from './actionTypes';
  
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