import { combineReducers } from 'redux';

import placeReducer from './selectPlace_reducer.js'; 
import cityReducer from './weatherData_reducer.js'; 
import descriptionReducer from './descriptionData_reducer.js'; 
import callTempReducer from './callTemp_reducer.js'; 
import callHighTempReducer from './callHighTemp_reducer.js'; 

const rootReducer = combineReducers({
  city: cityReducer,
  currentTemp: callTempReducer,
  description: descriptionReducer,
  highTemp: callHighTempReducer,
  place: placeReducer,
});

export default rootReducer;
