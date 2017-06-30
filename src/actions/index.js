// This file contains ACTION CREATORS, or functions that return ACTIONS. 
//
// These functions are called from the COMPONENTS. 
// 
// Let's build an ACTION CREATOR for APP... 

export const SELECT_PLACE = 'SELECT_PLACE'; 
export const WEATHER_DATA = 'WEATHER_DATA'; 

export const performSelectPlace = (num) => ({
	type: SELECT_PLACE,
	payload: num, 
});

export const callWeatherData = (data) => {
	console.log('action creator', data);
	return {
		type: WEATHER_DATA,
		payload: data,
	}
};

// Now, what's next? This action must be passed to a REDUCER. 
// The REDUCER is necessary to update the store. 
