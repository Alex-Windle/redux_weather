// The ACTION is now passed to the REDUCER. 
//
// The REDUCER is simply a function that updates the store. 
// 
// What does this function need to work? 
// 
// The required parameters are STATE (the current existing state) and the ACTION. 
// This function returns an object that contains a copy of STATE and the ACTION. 
// 
// 
// ---------> Note that the reducer does NOT change the existing state. It copies
// ---------> the state, then returns the updated copy. State is immutable.
// 
// 
// Based on matching keys, the ACTION changes a piece of STATE. 
// 
// All actions are sent to all reducers as a convention of Redux. 
// So, make a switch statement to match by ACTION TYPE. 

// eslint-disable-next-line
import { SELECT_PLACE } from '../actions/index'; 

const initialState = {
	payload: 3,
};


export default function(state = initialState, action) {
	const payload = action.payload;
	switch (action.type) {
		case SELECT_PLACE:
			return {
				...state,
				payload,
			}; 
		default: 
			return state; 
	}
}
