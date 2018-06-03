import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import { Stops } from '../../../../api/stops.js'
import DataTable from '../../../standardComponents/react_table.js'

class StopsList extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      region: "",
      country: "",
      continent: "",
      latitude: "",
      longitude: ""
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeCountry = this.onHandleChangeCountry.bind(this);
    this.onHandleChangeRegion = this.onHandleChangeRegion.bind(this);
    this.onHandleChangeContinent = this.onHandleChangeContinent.bind(this);
    this.onHandleChangeLatitude = this.onHandleChangeLatitude.bind(this);
    this.onHandleChangeLongitude = this.onHandleChangeLongitude.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.stopName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.stopRegion).value.trim();
    const country = ReactDOM.findDOMNode(this.refs.stopCountry).value.trim();
    const continent = ReactDOM.findDOMNode(this.refs.stopContinent).value.trim();
    const latitude = ReactDOM.findDOMNode(this.refs.stopLatitude).value.trim();
    const longitude = ReactDOM.findDOMNode(this.refs.stopLongitude).value.trim();

    Meteor.call('stop.insert', name, region, country, continent, latitude, longitude);

    this.setState({
      name : "",
      region: "",
      country: "",
      continent: "",
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

  onHandleChangeCountry(e){
    this.setState({
      country: e.target.value
    })
  }

  onHandleChangeContinent(e){
    this.setState({
      continent: e.target.value
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

  deleteAllStops(){
    Meteor.call('stops.deleteAll');
  }

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div>
        <button onClick={this.backAdmin}>Back</button><br/>
        <h1>Stops</h1>
        <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
          <input
            type="text"
            ref="stopName"
            placeholder="Stop name"
            onChange={this.onHandleChangeName}
            value= {this.state.name}
          /><br/>
          <input
            type="text"
            ref="stopRegion"
            placeholder="Stop region"
            onChange={this.onHandleChangeRegion}
            value= {this.state.region}
          /><br/>
          <input
            type="text"
            ref="stopCountry"
            placeholder="Stop country"
            onChange={this.onHandleChangeCountry}
            value= {this.state.country}
          /><br/>
          <input
            type="text"
            ref="stopContinent"
            placeholder="Stop continent"
            onChange={this.onHandleChangeContinent}
            value= {this.state.continent}
          /><br/>
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
        <button className="delete" onClick={this.deleteAllStops.bind(this)}>Delete all</button>
        <DataTable collection={this.props.stops}/>
      </div>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allStops');
  return {
    stops: Stops.find({}).fetch(),
  };
})(StopsList);
