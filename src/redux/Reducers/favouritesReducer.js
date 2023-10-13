// // favoriteCitiesReducer.js

import { ADD_TO_FAVORITES } from "../Actions/actionType";
import { REMOVE_FAVORITE_CITY } from '../Actions/actionType';

const initialState = {
  favoriteCities: [],
};

const favoriteCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
      case REMOVE_FAVORITE_CITY:
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter(city => city !== action.payload),
      };


    // ... other cases
    default:
      return state;
  }
};

export default favoriteCitiesReducer;
