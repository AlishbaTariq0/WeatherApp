// // coorect  favoriteCitiesReducer.js

import { ADD_FAVORITE_CITY, REMOVE_FAVORITE_CITY, SET_TEMPERATURE_UNIT } from "../Actions/actionType";

// import { ADD_TO_FAVORITES, REMOVE_FAVORITE_CITY, ADD_CITY_WEATHER_TO_FAVORITES } from "../Actions/actionType";

// const initialState = {
//   favoriteCities: [],
// };

// const favoriteCitiesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_FAVORITES:
//       console.log('Handling ADD_TO_FAVORITES action with payload:', action.payload);     

//       return {
//         ...state,
//         favoriteCities: [...state.favoriteCities, action.payload],
//       };
//     case REMOVE_FAVORITE_CITY:
//       return {
//         ...state,
//         favoriteCities: state.favoriteCities.filter(city => city !== action.payload),
//       };
//     case ADD_CITY_WEATHER_TO_FAVORITES:
//       // Here, make sure to access the 'cityWeather' from the action
//       const cityWeather = action.cityWeather;
//       return {
//         ...state,
//         favoriteCities: [...state.favoriteCities, cityWeather],
//       };
//     // ... other cases
//     default:
//       return state;
//   }
// };

// export default favoriteCitiesReducer;


// favoriteCitiesReducer.js
const initialState = {
  favoriteCities: [],
};

const favoriteCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      // Add the city to favorites
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    case 'REMOVE_FAVORITE_CITY':
      // Remove the city from favorites
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter((city) => city !== action.payload),
      };
    case 'SET_TEMPERATURE_UNIT':
      const { cityName, unit } = action.payload;
      // Find the city in the state by cityName and update its temperature unit
      const updatedFavoriteCities = state.favoriteCities.map((city) =>
        city.name === cityName ? { ...city, temperatureUnit: unit } : city
      );

      return {
        ...state,
        favoriteCities: updatedFavoriteCities,
      };
    default:
      return state;
  }
};

export default favoriteCitiesReducer;