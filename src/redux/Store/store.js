// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../redux/RootReducers';
import { watchFetchWeeklyWeather } from '../../saga/WeeklyWeatherSaga';
import rootSaga from '../../saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export default store;


