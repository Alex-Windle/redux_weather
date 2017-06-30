import { combineReducers } from 'redux';

import placeReducer from './selectPlace_reducer.js'; 
import cityReducer from './weatherData_reducer.js'; 

const rootReducer = combineReducers({
  place: placeReducer,
  city: cityReducer,
});

export default rootReducer;
