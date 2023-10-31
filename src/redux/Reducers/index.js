// reducers/rootReducer.js
import { combineReducers } from 'redux';
import searchBarReducer from './searchbarReducer';
import favoriteCitiesReducer from './reducers/favouritesReducer';
import weatherReducer from './reducers/weatherReducer';
import temperatureUnitReducer from './tempUnitReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  favoriteCities: favoriteCitiesReducer,
  weather: weatherReducer,  
  temperatureUnit: temperatureUnitReducer, // Add temperatureUnit to your root reducer
});


export default rootReducer;

