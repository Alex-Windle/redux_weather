// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import "bootswatch/flatly/bootstrap.css";

// Component imports 
import WeatherDisplay from './WeatherDisplay'; 

// Action imports
import { performSelectPlace } from '../actions/index'; 

// Custom data imports
import PLACES from '../data/places';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectCity = (index) => {
      this.props.performSelectPlace(index);
    }
  }

  render() {
    const place = this.props.place.payload;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Redux Simple Weather App
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
                onSelect={
                  (index) => {
                    this.selectCity(index);
                  }
                }
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay zip={PLACES[place].zip} key={place} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
})

const mapDispatchToProps = () => ({
  performSelectPlace,
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
