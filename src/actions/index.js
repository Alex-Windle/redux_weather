// This file contains ACTION CREATORS, or functions that return ACTIONS. 
//
// These functions are called from the COMPONENTS. 
// 
// Let's build an ACTION CREATOR for APP... 

export const SELECT_PLACE = 'SELECT_PLACE'; 
export const CITY = 'CITY'; 
export const DESCRIPTION = 'DESCRIPTION'; 
export const CURRENT_TEMP = 'CURRENT_TEMP'; 
export const HIGH_TEMP = 'HIGH_TEMP'; 


export const performSelectPlace = (num) => ({
	type: SELECT_PLACE,
	payload: num, 
});

export const callCity = (data) => {
	return {
		type: CITY,
		payload: data,
	}
};

export const callDescription = (data) => {
	return {
		type: DESCRIPTION,
		payload: data,
	}
};

export const callCurrentTemp = (data) => {
	console.log('data', data);
	return {
		type: CURRENT_TEMP,
		payload: data,
	}
};

export const callHighTemp = (data) => {
	console.log('data', data);
	return {
		type: HIGH_TEMP,
		payload: data,
	}
};

// Now, what's next? This action must be passed to a REDUCER. 
// The REDUCER is necessary to update the store. 
