// This file contains ACTION CREATORS, or functions that return ACTIONS. 
//
// These functions are called from the COMPONENTS. 
// 
// Let's build an ACTION CREATOR for APP... 

export const SELECT_PLACE = 'SELECT_PLACE'; 

export const performSelectPlace = (num) => {
	console.log("fire performSelectPlace function with", num);
	
	(dispatch) => ({
		type: SELECT_PLACE,
		payload: num,
	}); 
}

// Now, what's next? This action must be passed to a REDUCER. 
// The REDUCER is necessary to update the store. 
