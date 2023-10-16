// import { ADD_TO_FAVORITES } from "../Actions/actionType";

// // Initial state
// const initialState = {
//   favoriteCities: [], // Initial favorite cities list
//   // ...other state properties
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_FAVORITES:
//       return {
//         ...state,
//         favoriteCities: [...state.favoriteCities, action.payload],
//       };
//     // ...other cases
//     default:
//       return state;
//   }
// };

// export default reducer;


// reducer.js
import { ADD_FAVORITE_CITY } from "../Actions/actionType";

const initialState = {
  favoriteCities: [], // An array to store favorite cities
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_CITY:
      // Check if the city is not already in the favorites
      if (!state.favoriteCities.includes(action.city)) {
        // Create a new array with the added city
        const newFavoriteCities = [...state.favoriteCities, action.city];
        return {
          ...state,
          favoriteCities: newFavoriteCities,
        };
      }
      return state;

    // Handle other actions if needed

    default:
      return state;
  }
};

export default reducer;
