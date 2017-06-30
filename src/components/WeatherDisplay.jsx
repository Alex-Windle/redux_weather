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

class WeatherDisplay extends Component {

  componentDidMount() {
  	const { zip } = this.props; 
   	const url = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`; 
  
  	fetch(url)
  		.then(resp => resp.json())
  		.then(resp => {
  			this.props.callCity(resp.name); 
  		})
  }

  render() { 
  	const city = this.props.city.payload;
  	return (
  		<div>
        <br />
  			Weather for {city}
  		</div>
  	);
  }
}

const mapStateToProps = state => ({
	city: state.city,
})

const mapDispatchToProps = () => ({
	callCity,
})

export default connect(mapStateToProps, mapDispatchToProps())(WeatherDisplay); 
