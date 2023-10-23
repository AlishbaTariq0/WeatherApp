// rootsaga.js
import { all } from 'redux-saga/effects';
import watchFetchWeather from '../WeatherSaga';
import { watchSetTemperatureUnit } from '../TemperatureSaga';

export default function* rootSaga() {
  yield all([
    watchFetchWeather(),
    watchSetTemperatureUnit(),
  ]);
}


