import { combineReducers } from 'redux';

import AppReducer from './app_reducer.js'; 

const rootReducer = combineReducers({
  appReducer: AppReducer,
});

export default rootReducer;