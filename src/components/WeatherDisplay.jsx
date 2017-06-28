// Now that the App component is connected to Redux and updating the store, 
// it's time to think about how to configure the WeatherDisplay component. 
//
// First question: Should this be a container (connected to Redux) or component (not connected)?
//
// This component holds its own state, which saves weather data. So, it should be a container.
//
// -----> CONNECT TO REDUX
//   (1) Import connect function from 'react-redux';
//

// Module imports 
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'; 

class WeatherDisplay extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

// This function connects to state, finds the key: selectPlace and imports it into 
// this file as a PROP (??? Is this correct)
function mapStateToProps({ appReducer }) {
  return { appReducer }; 
}

export default connect(mapStateToProps)(WeatherDisplay)