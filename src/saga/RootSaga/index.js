// RootSaga.js
import { all } from 'redux-saga/effects';
import watchFetchWeather from '../WeatherSaga';

export default function* rootSaga() {
  yield all([watchFetchWeather()]);
}