// // reducers/temperatureUnitReducer.js

import { SET_TEMPERATURE_UNIT } from "../Actions/actionType";

// import { SET_TEMPERATURE_UNIT } from "../Actions/actionType";

// const initialState = {
//   unit: '°C', // Default to Celsius
// };

// const temperatureUnitReducer = (state = initialState, action) => {
//   console.log('Reducer called with action:', action); // Add this line

//   switch (action.type) {
//     case SET_TEMPERATURE_UNIT:
//       console.log('SET_TEMPERATURE_UNIT action received with unit:', action.unit);
//       return {
//         ...state,
//         unit: action.unit,
//       };
//     default:
//       return state;
//   }
// };

// export default temperatureUnitReducer;


// reducer.js
const initialState = {
  // Other initial state properties
  temperatureUnit: '°C', // Set an initial value, typically '°C'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureUnit: action.payload,
      };
    // Handle other actions and state updates
    default:
      return state;
  }
};

export default rootReducer;
