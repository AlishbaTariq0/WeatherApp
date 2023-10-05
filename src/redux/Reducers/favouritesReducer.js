// favoriteCitiesReducer.js

import { ADD_TO_FAVORITES } from "../Actions/actionType";

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
    // Handle other action types if needed
    default:
      return state;
  }
};


export default favoriteCitiesReducer;
