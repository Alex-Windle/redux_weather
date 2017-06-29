// Now that the App component is connected to Redux and updating the store, 
// it's time to think about how to configure the WeatherDisplay component. 
//
// First question: Should this be a container (connected to Redux) or component (not connected)?
//
// This component holds its own state, which saves weather data. So, it should be a container.
//
// -----> HOW TO CONNECT TO REDUX
//   (1) Import connect helper function. This hooks up your React component to the Redux store. 
//   (2) Pass the component, WeatherDisplay, into the connect function (with additional functions 
//       that you may plan to use, such as mapStateToProps here.) 
//   (3) Bring in the store data! Do this by calling the function mapStateToProps with "selectPlace", your store key.
//   (4) Show your data! Display the props using this.props.selectPlace.payload. 
//   (5) That was awesome! 

// Module imports 
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { connect } from 'react-redux';  

export default class WeatherDisplay extends Component {
  render() {
    console.log("WeatherDisplay - mapStateToProps, this.props.zip: ", this.props.zip);
    return (
      <div></div>
    );
  }
}

// function mapStateToProps({ selectPlace }) {
//   return { selectPlace }; 
// }

// export default connect(mapStateToProps)(WeatherDisplay)