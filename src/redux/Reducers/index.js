// reducers/rootReducer.js
import { combineReducers } from 'redux';
import searchBarReducer from './searchbarReducer';
import favoriteCitiesReducer from './reducers/favouritesReducer';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  favoriteCities: favoriteCitiesReducer,
  weather: weatherReducer,
});


export default rootReducer;

