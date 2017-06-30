// Now that the App component is connected to Redux and updating the store, 
// it's time to think about how to configure the WeatherDisplay component. 
//
// First question: Should this be a container (connected to Redux) or component (not connected)?
//
// This component holds its own state, which saves weather data. So, it should be a container.
//

// Module imports 
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

// Action imports
import { callWeatherData } from '../actions/index'; 

class WeatherDisplay extends Component {

  componentDidMount() {
  	const { zip } = this.props; 
   	const url = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`; 
  
  	fetch(url)
  		.then(resp => resp.json())
  		.then(resp => {
  			console.log("pass into weather data", resp.name);
  			this.props.callWeatherData(resp.name); 
  		})
  }

  render() { 
  	const city = this.props.weather.payload;
  	console.log(this.props.weather);
  	// if (!city) return <div>Loading...</div>; 

  	return (
  		<div>
  			Weather for {city}
  		</div>
  	);
  }
}

const mapStateToProps = state => ({
	weather: state.weather,
})

const mapDispatchToProps = () => ({
	callWeatherData,
})

export default connect(mapStateToProps, mapDispatchToProps())(WeatherDisplay); 
