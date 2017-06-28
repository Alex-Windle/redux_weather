import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// This React application comprises two components, App and WeatherDisplay.

// App is the parent component that brings in the data set, PLACES. 
//
// 			const PLACES = [
//   			{ name: "Palo Alto", zip: "94303" },
//   			{ name: "San Jose", zip: "94088" },
//   			{ name: "Santa Cruz", zip: "95062" },
//   			{ name: "Honolulu", zip: "96803" }
// 			];
// 
// App maintains its own STATE, which is the current PLACE on display. 
// Users click a new place, which updates STATE. 
// App passes down PROPS to WeatherDisplay, based on its STATE.

// WeatherDisplay is the child component, that only displays what App passes down to it.
//
// On render, WD returns "Loading..."
// On componentDidMount(), WD fetches weather data, and updates STATE.
//
//
//
// ***---***---*** Refactor to Redux ***---***---***
// 
// -- Move component state to Redux store
//
// -- User events fire action creators, which pass actions to reducers, which update the store.
//

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

registerServiceWorker();
