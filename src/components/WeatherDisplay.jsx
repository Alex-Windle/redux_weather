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

  // Fetch weather data from this url : 
  // http://api.openweathermap.org/data/2.5/weather?q=30067&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial
  // 
  // Then, look at this object and choose which items to display: 
  // main, description, etc. 

  // Fetch icon from this url : 
  // http://openweathermap.org/img/w/10d.png

  componentDidMount() {
  	const { zip } = this.props; 
   	const url = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`; 
  
  	fetch(url)
  		.then(resp => resp.json())
  		.then(resp => {
  			this.props.callWeatherData(resp); 
  		})
  }

  render() { 
  	console.log(this.props); 

  	const { zip } = this.props;

    return (
      <div>WeatherDisplay for ZIP code {zip}</div>
    );
  }
}

const mapDispatchToProps = () => ({
	callWeatherData,
})

export default connect(null, mapDispatchToProps())(WeatherDisplay); 
