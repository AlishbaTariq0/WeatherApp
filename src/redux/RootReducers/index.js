// reducers.js

const initialState = {
  searchBarVisible: true,
  favoriteCities: [],
  weather: {
    weeklyData: [],
    loading: false,
    error: null,
  },
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_BAR':
      return {
        ...state,
        searchBarVisible: !state.searchBarVisible,
      };

    case 'ADD_FAVORITE_CITY':
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };

    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        weather: {
          ...state.weather,
          weeklyData: action.payload.weeklyData, // Update weekly data
          loading: false,
          error: null,
        },
      };

    case 'FETCH_WEATHER_FAILURE':
      return {
        ...state,
        weather: {
          ...state.weather,
          weeklyData: [], // Reset weekly data on failure
          loading: false,
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
};

export default Reducers;
