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

// Action imports
import { performSelectPlace } from '../actions/index'; 

class App extends Component {
  constructor(props) {
    super(props);

    this.selectCity = (index) => {
      console.log("fire selectCity function with index", index);
      this.props.performSelectPlace(index);
    }
  }

  render() {
    console.log("App props: ", this.props);
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
              <WeatherDisplay />
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

// This function binds ACTIONS to REDUCERS.
const mapDispatchToProps = () => ({
  performSelectPlace,
});

// This function connects the COMPONENT to REDUX (???)
export default connect(mapStateToProps, mapDispatchToProps())(App);
