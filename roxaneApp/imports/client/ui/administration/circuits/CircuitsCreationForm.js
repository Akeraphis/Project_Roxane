import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { InterestZones } from '../../../../api/interestZones.js';
import { Stops } from '../../../../api/stops.js';
import { Circuits } from '../../../../api/circuits.js';

class CircuitsCreationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      interestZone: "",
      description: "",
      average_rating: "",
      total_nb_days : "",
      stopsInCircuit: [],
      pictures: [],
      car_location: false
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeInterestZone = this.onHandleChangeInterestZone.bind(this);
    this.onHandleChangeDescription = this.onHandleChangeDescription.bind(this);
    this.onHandleChangeAverageRating = this.onHandleChangeAverageRating.bind(this);
    this.onHandleChangePictures = this.onHandleChangePictures.bind(this);
    this.onHandleChangeCarLocation = this.onHandleChangeCarLocation.bind(this);
    this.onHandleChangeStopsInCircuit = this.onHandleChangeStopsInCircuit.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.cName).value.trim();
    const iz = ReactDOM.findDOMNode(this.refs.ciz).value.trim();
    const description = ReactDOM.findDOMNode(this.refs.cDescription).value.trim();
    const avRating = ReactDOM.findDOMNode(this.refs.cAvRating).value.trim();
    const pictures = ReactDOM.findDOMNode(this.refs.cPictures).value.trim();
    const cCarLocation = ReactDOM.findDOMNode(this.refs.cCarLocation).value.trim();

    Meteor.call('circuit.insert', name, iz, description, avRating, pictures, cCarLocation);

    this.setState({
      name: "",
      interestZone: "",
      description: "",
      average_rating: "",
      total_nb_days : "",
      stopsInCircuit: [],
      pictures: [],
      car_location: false
    })
  }

  onHandleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onHandleChangeInterestZone(e){
    this.setState({
      interestZone: e.target.value
    })
  }

  onHandleChangeDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  onHandleChangeAverageRating(e){
    this.setState({
      average_rating: e.target.value
    })
  }

  onHandleChangeStopsInCircuit(e){
    this.setState({
      stopsInCircuit: e.target.value
    })
  }

  onHandleChangePictures(e){
    this.setState({
      pictures: e.target.value
    })
  }

  onHandleChangeCarLocation(e){
    this.setState({
      car_location: e.target.value
    })
  }


  render(){
    return(
      <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
        <input
          type="text"
          ref="cName"
          placeholder="Circuit name"
          onChange={this.onHandleChangeName}
          value= {this.state.name}
        /><br/>
        <input
          type="text"
          ref="cDescription"
          placeholder="Circuit description"
          onChange={this.onHandleChangeDescription}
          value= {this.state.description}
        /><br/>
        <select name="select" ref="ciz" value={this.state.interestZone} onChange={this.onHandleChangeInterestZone}>
          {this.props.interestZones.map((iz) => {
            return(
              <option key={iz._id} value={iz.name}>{iz.name}</option>
            )
          })}
        </select><br/>
        <button className="btn btn-primary">Add stop</button><br/><br/>
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allInterestZones');
  return {
    interestZones: InterestZones.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(CircuitsCreationForm);
