import { takeLatest, call, put } from 'redux-saga/effects';
import { SET_TEMPERATURE_UNIT } from '../../redux/Actions/actionType';
import { setTemperatureUnit } from '../../redux/Actions';

function* setTemperatureUnitSaga(action) {
  try {
    yield put(setTemperatureUnit(action.unit));
  } catch (error) {
    // Handle the error if needed
    console.error('Error setting temperature unit:', error);
  }
}

// Watch for the SET_TEMPERATURE_UNIT action and execute the saga
export function* watchSetTemperatureUnit() {
  yield takeLatest(SET_TEMPERATURE_UNIT, setTemperatureUnitSaga);
}
