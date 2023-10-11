import { ADD_TO_FAVORITES } from "../Actions/actionType";

// Initial state
const initialState = {
  favoriteCities: [], // Initial favorite cities list
  // ...other state properties
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
    // ...other cases
    default:
      return state;
  }
};

export default reducer;
