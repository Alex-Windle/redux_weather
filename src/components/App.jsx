import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import "bootswatch/flatly/bootstrap.css";

import PLACES from '../data/places'; 

import WeatherDisplay from './WeatherDisplay'; 

// Action imports
import { selectPlace } from '../actions/index'; 

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = { activePlace: 0 }
  }

  render() {
    // const activePlace = this.state.activePlace;
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
                  selectPlace(index)
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

export default App;