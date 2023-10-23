// reducers/temperatureUnitReducer.js
import { SET_TEMPERATURE_UNIT } from "../Actions/actionType";

const initialState = {
  unit: '°C', // Default to Celsius
};

const temperatureUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPERATURE_UNIT:
      return {
        ...state,
        unit: action.unit,
      };
    default:
      return state;
  }
};

export default temperatureUnitReducer;
