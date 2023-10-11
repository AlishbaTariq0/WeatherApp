// reducers/rootReducer.js
import { combineReducers } from 'redux';
import searchBarReducer from './searchbarReducer';
import favoriteCitiesReducer from './favouritesReducer';
import weatherReducer from './weatherReducer';


const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  favoriteCities: favoriteCitiesReducer,
  weather: weatherReducer,
});

export default rootReducer;

