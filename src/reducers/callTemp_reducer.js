// A reducer takes in an action and state, and returns a new state.
import { CURRENT_TEMP } from '../actions/index'; 

const initialState = { 
	payload: 100 
}; 

export default function (state = initialState, action) {
	const { payload } = action; 
	switch(action.type) {
		case CURRENT_TEMP: 
			return {
				...state,
				payload,
			};
		default:
			return state;
	}
}