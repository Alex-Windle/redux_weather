import { combineReducers } from 'redux';

import placeReducer from './selectPlace_reducer.js'; 
import weatherReducer from './weatherData_reducer.js'; 

const rootReducer = combineReducers({
  place: placeReducer,
  weather: weatherReducer,
});

export default rootReducer;
