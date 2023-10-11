// //weather reducer
// import { FETCH_WEATHER_REQUEST } from "../Actions/actionType";
// import { FETCH_WEATHER_FAILURE } from "../Actions/actionType";
// import { FETCH_WEATHER_SUCCESS } from "../Actions/actionType";

import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEEKLY_WEATHER_FAILURE, FETCH_WEEKLY_WEATHER_SUCCESS } from "../Actions/actionType";

// const initialState = {
//   cityName: '', // Initialize with an empty string
//   weeklyData: [],
//   loading: false,
//   error: null,
// };

// const weatherReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_WEATHER_REQUEST:
//       return {
//         ...state,
//         cityName: action.payload.cityName, // Update the cityName in the state
//         loading: true,
//         error: null,
//       };
//     case FETCH_WEATHER_SUCCESS:
//       return {
//         ...state,
//         weeklyData: action.data,
//         loading: false,
//       };
//     case FETCH_WEATHER_FAILURE:
//       return {
//         ...state,
//         error: action.error,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };
// export default weatherReducer;

// reducers/weatherReducer.js


const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload.weatherData,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default weatherReducer;
