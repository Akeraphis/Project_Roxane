import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Regions } from '../../../../api/regions.js';

class StopsCreationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      region: "",
      latitude: "",
      longitude: ""
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeRegion = this.onHandleChangeRegion.bind(this);
    this.onHandleChangeLatitude = this.onHandleChangeLatitude.bind(this);
    this.onHandleChangeLongitude = this.onHandleChangeLongitude.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.stopName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.stopRegion).value.trim();
    const latitude = ReactDOM.findDOMNode(this.refs.stopLatitude).value.trim();
    const longitude = ReactDOM.findDOMNode(this.refs.stopLongitude).value.trim();

    Meteor.call('stop.insert', name, region, latitude, longitude);

    this.setState({
      name : "",
      region: "",
      latitude: "",
      longitude: ""
    })
  }

  onHandleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onHandleChangeRegion(e){
    this.setState({
      region: e.target.value
    })
  }

  onHandleChangeLatitude(e){
    this.setState({
      latitude: e.target.value
    })
  }

  onHandleChangeLongitude(e){
    this.setState({
      longitude: e.target.value
    })
  }

  render(){
    return(
      <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
        <input
          type="text"
          ref="stopName"
          placeholder="Stop name"
          onChange={this.onHandleChangeName}
          value= {this.state.name}
        /><br/>
        <select name="select" ref="stopRegion" value={this.state.region} onChange={this.onHandleChangeRegion}>
          {this.props.regions.map((region) => {
            return(
              <option key={region._id} value={region.name}>{region.name}</option>
            )
          })}
        </select>
        <br/>
        <input
          type="text"
          ref="stopLatitude"
          placeholder="Stop latitude"
          onChange={this.onHandleChangeLatitude}
          value= {this.state.latitude}
        /><br/>
        <input
          type="text"
          ref="stopLongitude"
          placeholder="Stop longitude"
          onChange={this.onHandleChangeLongitude}
          value= {this.state.longitude}
        /><br/>
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allRegions');
  return {
    regions: Regions.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(StopsCreationForm);
