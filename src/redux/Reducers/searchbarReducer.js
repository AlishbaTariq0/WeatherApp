import { TOGGLE_SEARCH_BAR } from "../Actions/actionType";

// reducers/searchBarReducer.js
const initialState = {
    isSearchBarVisible: true,
  };
  



  const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_SEARCH_BAR:
        return {
          ...state,
          isSearchBarVisible: !state.isSearchBarVisible,
        };
  
      default:
        return state;
    }
  };
  
  export default searchBarReducer;

  