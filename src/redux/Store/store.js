// // redux/store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const middleware = [thunk];

// const store = createStore(rootReducer, applyMiddleware(...middleware));

// export default store;






// store.js

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import favoriteCitiesReducer from '../RootReducers/favouritesReducer';


// const rootReducer = combineReducers({
//   favoriteCities: favoriteCitiesReducer,
//   // Add other reducers here if needed
// });

// const middleware = [thunk];

// const store = createStore(rootReducer, applyMiddleware(...middleware));

// export default store;

// Store.js// Store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers';
import rootSaga from '../../saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
