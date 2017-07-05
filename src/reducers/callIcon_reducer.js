import { ICON } from '../actions/index'; 

const initialState = {payload: '01d'};

export default (state = initialState, action) => {
	const { payload } = action; 
	switch(action.type) {
		case ICON: 
			return {
				...state,
				payload,
			}; 
		default: 
			return state; 
	}
}
