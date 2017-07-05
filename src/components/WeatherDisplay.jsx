// Now that the App component is connected to Redux and updating the store, 
// it's time to think about how to configure the WeatherDisplay component. 
//
// First question: Should this be a container (connected to Redux) or component (not connected)?
//
// This component holds its own state, which saves weather data. So, it should be a container.

// Module imports 
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

// Action imports
import { callCity } from '../actions/index';
import { callDescription } from '../actions/index';  
import { callCurrentTemp } from '../actions/index'; 
import { callHighTemp } from '../actions/index'; 
import { callLowTemp } from '../actions/index'; 

class WeatherDisplay extends Component {

  componentDidMount() {
  	const { zip } = this.props; 
   	const url = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`; 
  
  	fetch(url)
  		.then(resp => resp.json())
  		.then(resp => {
        console.log(resp);
  			this.props.callCity(resp.name); 
        this.props.callDescription(resp.weather[0].main);
        this.props.callCurrentTemp(resp.main.temp);
        this.props.callHighTemp(resp.main.temp_max);
        this.props.callLowTemp(resp.main.temp_min);
  		})
  }

  render() { 
  	const city = this.props.city.payload;
    const description = this.props.description.payload;
    const temp = this.props.currentTemp.payload;
    const highTemp = this.props.highTemp.payload;
    const lowTemp = this.props.lowTemp.payload;

  	return (
  		<div>
        <br />
  			<h1>{description} in {city}</h1>
        <br /><br />
        Current: {temp}
        <br /><br />
        High: {highTemp}
        <br /><br />
        Low: {lowTemp}
        <br /><br />
        Wind speed: 
  		</div>
  	);
  }
}

const mapStateToProps = state => ({
	city: state.city,
  description: state.description,
  currentTemp: state.currentTemp,
  highTemp: state.highTemp,
  lowTemp: state.lowTemp,
})

const mapDispatchToProps = () => ({
	callCity,
  callDescription,
  callCurrentTemp,
  callHighTemp,
  callLowTemp,
})

export default connect(mapStateToProps, mapDispatchToProps())(WeatherDisplay); 
