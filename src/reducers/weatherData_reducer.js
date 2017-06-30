// A reducer is a function that takes state and action...
// and returns new state object.
import { WEATHER_DATA } from '../actions/index'; 

export default function(state = null, action) {
	const { payload } = action; 
	switch(action.type) {
		case WEATHER_DATA: 
			return {
				...state,
				payload,
			}; 
		default: 
			return state; 
	}
}
