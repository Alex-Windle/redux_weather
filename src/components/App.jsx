// Module imports
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import "bootswatch/flatly/bootstrap.css";

// Custom data imports
import PLACES from '../data/places';

// Component imports 
import WeatherDisplay from './WeatherDisplay'; 

// Redux import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

// Action imports
import { selectPlace } from '../actions/index'; 

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                onSelect={(index) => {
                  this.props.selectPlace(index)
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

// This function binds ACTIONS to REDUCERS.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPlace }, dispatch);
}

// This function connects the COMPONENT to REDUX (???)
export default connect(null, mapDispatchToProps)(App);




