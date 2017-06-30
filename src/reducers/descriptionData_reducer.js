// A reducer is a function that takes in state and action
// ... and returns new state. 
import { DESCRIPTION } from '../actions/index'; 

const initialState = {
	payload: "heavy intensity rain" 
}; 

export default function(state = initialState, action) {
	const payload = action.payload; 
	console.log(action);
	switch(action.type) {
		case DESCRIPTION: 
			return {
				...state, 
				payload,
			};
		default: 
			return state;
	}
}