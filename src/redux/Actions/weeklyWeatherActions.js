// actions/weeklyWeatherActions.js

import { FETCH_WEEKLY_WEATHER_FAILURE, FETCH_WEEKLY_WEATHER_REQUEST, FETCH_WEEKLY_WEATHER_SUCCESS } from "./actionType";

export const fetchWeeklyWeatherRequest = (cityName) => ({
  type: FETCH_WEEKLY_WEATHER_REQUEST,
  payload: { cityName },
});

export const fetchWeeklyWeatherSuccess = (weeklyData) => ({
  type: FETCH_WEEKLY_WEATHER_SUCCESS,
  weeklyData,
});

export const fetchWeeklyWeatherFailure = (error) => ({
  type: FETCH_WEEKLY_WEATHER_FAILURE,
  error,
});
