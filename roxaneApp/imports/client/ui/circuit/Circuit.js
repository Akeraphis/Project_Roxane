import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import NavBar from "../NavBar";
import MapCircuit from './MapCircuit';

export default class CircuitPage extends Component {
  render(){

    return(
      <div>
        <NavBar />
        <MapCircuit />
      </div>
    )
  }
}
