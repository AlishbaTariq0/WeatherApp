// weeklyWeatherSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchWeeklyWeatherSuccess,
  fetchWeeklyWeatherFailure,
} from '../../redux/Actions/weeklyWeatherActions'; // Adjust the path as needed

import { fetchWeeklyWeatherData } from '../../helper/api'; // Define your API function
import { FETCH_WEEKLY_WEATHER_REQUEST } from '../../redux/Actions/actionType';

export function* fetchWeeklyWeather(action) {
  try {
    const data = yield call(fetchWeeklyWeatherData, action.payload.cityName);
    yield put(fetchWeeklyWeatherSuccess(data));
  } catch (error) {
    yield put(fetchWeeklyWeatherFailure(error));
  }
}

export function* watchFetchWeeklyWeather() {
  yield takeLatest(FETCH_WEEKLY_WEATHER_REQUEST, fetchWeeklyWeather);
}
