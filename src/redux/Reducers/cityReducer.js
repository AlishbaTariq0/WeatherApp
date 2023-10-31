import { SET_TEMPERATURE_UNIT } from "../Actions/actionType";

const initialState = {
    cities: [],
  };
  
  const cityReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TEMPERATURE_UNIT:
        const { cityName, unit } = action.payload;
        // Find the city in the state by cityName and update its temperature unit
        const updatedCities = state.cities.map((city) =>
          city.name === cityName ? { ...city, temperatureUnit: unit } : city
        );
  
        return { ...state, cities: updatedCities };
      
      // Other reducer cases...
      
      default:
        return state;
    }
  };
  
  export default cityReducer;
  