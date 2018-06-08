import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

export default class StopsInCircuit extends Component{
  render(){
    return(
      <h6>My stops in my selected Circuit: {this.props.selectedCircuit._id}</h6>
    )
  }
}
