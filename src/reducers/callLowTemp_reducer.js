//The reducer takes in the state and an action.
//It returns a new state!

import { LOW_TEMP } from '../actions/index'; 

const initialState = {payload: 65}; 

export default (state = initialState, action) => {
	const { payload } = action; 
	switch(action.type) {
		case LOW_TEMP: 
			return {
				...state,
				payload,
			}; 
		default: 
			return state; 
	}
}; 
