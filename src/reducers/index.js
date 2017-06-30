import { combineReducers } from 'redux';

import placeReducer from './selectPlace_reducer.js'; 

const rootReducer = combineReducers({
  place: placeReducer,
});

export default rootReducer;
