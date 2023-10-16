// // // favoriteCitiesReducer.js

// import { ADD_TO_FAVORITES } from "../Actions/actionType";
// import { REMOVE_FAVORITE_CITY } from "../Actions/actionType";
// import { ADD_CITY_WEATHER_TO_FAVORITES } from "../Actions/actionType";

// const initialState = {
//   favoriteCities: [],
// };

// const favoriteCitiesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_FAVORITES:
//       return {
//         ...state,
//         favoriteCities: [...state.favoriteCities, action.payload],
//       };
//     case REMOVE_FAVORITE_CITY:
//       return {
//         ...state,
//         favoriteCities: state.favoriteCities.filter(
//           (city) => city !== action.payload
//         ),
//       };
//     case ADD_CITY_WEATHER_TO_FAVORITES:
//       return {
//         ...state,
//         favoriteCities: [...state.favoriteCities, action.cityWeather],
//       };

//     // ... other cases
//     default:
//       return state;
//   }
// };

// export default favoriteCitiesReducer;



// favoriteCitiesReducer.js

import { ADD_TO_FAVORITES, REMOVE_FAVORITE_CITY, ADD_CITY_WEATHER_TO_FAVORITES } from "../Actions/actionType";

const initialState = {
  favoriteCities: [],
};

const favoriteCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      console.log('Handling ADD_TO_FAVORITES action with payload:', action.payload);     

      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    case REMOVE_FAVORITE_CITY:
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter(city => city !== action.payload),
      };
    case ADD_CITY_WEATHER_TO_FAVORITES:
      // Here, make sure to access the 'cityWeather' from the action
      const cityWeather = action.cityWeather;
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, cityWeather],
      };
    // ... other cases
    default:
      return state;
  }
};

export default favoriteCitiesReducer;
