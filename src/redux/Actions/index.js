// // actions.js

import { TOGGLE_SEARCH_BAR, REMOVE_FAVORITE_CITY, ADD_FAVORITE_CITY, ADD_CITY_WEATHER_TO_FAVORITES, FETCH_HOURLY_WEATHER_REQUEST, FETCH_HOURLY_WEATHER_SUCCESS, FETCH_HOURLY_WEATHER_FAILURE, SET_TEMPERATURE_UNIT } from './actionType';
import { FETCH_WEATHER_REQUEST , FETCH_WEATHER_SUCCESS , FETCH_WEATHER_FAILURE} from './actionType';
import { ADD_TO_FAVORITES } from './actionType';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
});

export const fetchWeatherRequest = (city) => ({
  type: FETCH_WEATHER_REQUEST,
  payload: { cityName: city }, // Send the searched city to the action
});


export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

// export const addToFavorites = (cityData) => ({
//   type: ADD_TO_FAVORITES,
//   payload: cityData,
// });

export const addToFavorites = (cityData) => {
  console.log('Dispatching addToFavorites action with cityData:', cityData);

  // Rest of the action creator logic
  return {
    type: ADD_TO_FAVORITES,
    payload: cityData,
  };
};


export const removeFavoriteCity = (cityName) => ({
  type: REMOVE_FAVORITE_CITY,
  payload: cityName,
});

export const addFavoriteCity = (city) => {
  return {
    type: ADD_FAVORITE_CITY,
    city,
  };
};

export const addCityWeatherToFavorites = (cityWeather) => ({
  type: ADD_CITY_WEATHER_TO_FAVORITES,
  cityWeather,
});

export const fetchHourlyWeatherRequest = (cityName) => ({
  type: FETCH_HOURLY_WEATHER_REQUEST,
  payload: { cityName },
});

export const fetchHourlyWeatherSuccess = (data) => ({
  type: FETCH_HOURLY_WEATHER_SUCCESS,
  payload: { data },
});

export const fetchHourlyWeatherFailure = (error) => ({
  type: FETCH_HOURLY_WEATHER_FAILURE,
  payload: { error },
});

export const setTemperatureUnit = (unit) => ({
  type: SET_TEMPERATURE_UNIT,
  unit,
});


// export const setTemperatureUnit = (unit) => {
//   return async (dispatch) => {
//     try {
//       // Save the selected unit in local storage
//       await AsyncStorage.setItem('temperatureUnit', unit);

//       // Dispatch the action to update Redux state
//       dispatch({
//         type: SET_TEMPERATURE_UNIT,
//         unit,
//       });
//     } catch (error) {
//       console.error('Error saving temperature unit to local storage:', error);
//     }
//   };
// };
