// A reducer is a function that takes state and action...
// and returns new state object.
import { CITY } from '../actions/index'; 

const initialState = {
	payload: "Honolulu",
}

export default function(state = initialState, action) {
	const { payload } = action; 
	switch(action.type) {
		case CITY: 
			return {
				...state,
				payload,
			}; 
		default: 
			return state; 
	}
}
