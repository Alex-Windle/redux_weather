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

export default class WeatherDisplay extends Component {
  render() {
    const zip = this.props.zip;  
    return (
      <div>WeatherDisplay for ZIP code {zip}</div>
    );
  }
}
