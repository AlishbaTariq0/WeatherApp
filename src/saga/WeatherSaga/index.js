// // saga/weatherSaga.js
// import { call, put, takeLatest } from 'redux-saga/effects';
// import {
//   FETCH_WEATHER_REQUEST,
//   fetchWeatherSuccess,
//   fetchWeatherFailure,
// } from '../../redux/Actions';
// import { fetchWeatherData } from '../../helper/api';

// export function* fetchWeather(action) {
//   try {
//     const data = yield call(fetchWeatherData, action.payload.cityName);
//     yield put(fetchWeatherSuccess(data));
//   } catch (error) {
//     yield put(fetchWeatherFailure(error));
//   }
// }

// export function* watchFetchWeather() {
//   yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
// }

// sagas/weatherSaga.js
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_HOURLY_WEATHER_REQUEST, FETCH_WEATHER_REQUEST } from '../../redux/Actions/actionType';
import { fetchHourlyWeatherFailure, fetchHourlyWeatherSuccess, fetchWeatherFailure, fetchWeatherSuccess } from '../../redux/Actions';
import { fetchWeatherData } from '../../helper/api';
import { fetchHourlyWeatherData } from '../../helper/hourlyApi';

export function* fetchWeather(action) {
  try {
    const data = yield call(fetchWeatherData, action.payload.cityName);
    yield put(fetchWeatherSuccess(data));
  } catch (error) {
    yield put(fetchWeatherFailure(error));
  }
}

export function* fetchHourlyWeather(action) {
  try {
    const data = yield call(fetchHourlyWeatherData, action.payload.cityName);
    yield put(fetchHourlyWeatherSuccess(data));
  } catch (error) {
    yield put(fetchHourlyWeatherFailure(error));
  }
}

export function* watchFetchWeather() {
  yield all([
    takeLatest(FETCH_WEATHER_REQUEST, fetchWeather),
    takeLatest(FETCH_HOURLY_WEATHER_REQUEST, fetchHourlyWeather),
  ]);
}
