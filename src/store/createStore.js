import { createStore } from 'redux';
import reducers from '../reducers/index';


const store = createStore(
  reducers, 
  { place: {payload: 3} }, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
