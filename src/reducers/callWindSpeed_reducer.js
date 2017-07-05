// The reducer takes in state and an action. 
// It returns the new state!
// This new state passes up to the root reducer, which updates the store.

import { WIND_SPEED } from '../actions/index.js'; 

const initialState = {payload: 4.3}

export default (state = initialState, action) => {
	const { payload } = action;
	switch(action.type) {
		case WIND_SPEED: 
			return {
				...state,
				payload
			}; 
		default: 
			return state; 
	}
}
