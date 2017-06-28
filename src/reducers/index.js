import { combineReducers } from 'redux';

import SelectPlaceReducer from './selectPlace_reducer.js'; 

const rootReducer = combineReducers({
  selectPlace: SelectPlaceReducer,
});

export default rootReducer;
