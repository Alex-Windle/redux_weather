import { combineReducers } from 'redux';

import placeReducer from './selectPlace_reducer.js'; 
import cityReducer from './weatherData_reducer.js'; 
import descriptionReducer from './descriptionData_reducer.js'; 

const rootReducer = combineReducers({
  city: cityReducer,
  description: descriptionReducer,
  place: placeReducer,
});

export default rootReducer;
