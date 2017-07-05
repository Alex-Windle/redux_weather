// The reducer is a function that takes in state and an action. 
// Then, it matches the action on a switch statement...
// ...and finally returns the new state to the store!
import { HIGH_TEMP } from '../actions/index.js'; 

const initialState = {highTemp: {payload: 85}}; 

export default (state = initialState, action) => {
	console.log('hightemp reducer', action);
	console.log('initialState', state);
	const { payload } = action; 
	switch(action.type) {
		case HIGH_TEMP:
			return {
				...state, 
				payload,
			}; 
		default: 
			return state; 
	}
}; 
