import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import InterestZone from './InterestZone';
import { InterestZones } from '../../../../api/interestZones.js';
import DataTable from '../../../standardComponents/react_table.js';

class InterestZonesList extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      region: "",
      country: "",
      continent: ""
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeCountry = this.onHandleChangeCountry.bind(this);
    this.onHandleChangeRegion = this.onHandleChangeRegion.bind(this);
    this.onHandleChangeContinent = this.onHandleChangeContinent.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.izName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.izRegion).value.trim();
    const country = ReactDOM.findDOMNode(this.refs.izCountry).value.trim();
    const continent = ReactDOM.findDOMNode(this.refs.izContinent).value.trim();

    Meteor.call('iz.insert', name, region, country, continent);

    this.setState({
      name : "",
      region: "",
      country: "",
      continent: ""
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

  renderIZ(){
    return this.props.interestZones.map((interestZone)=> (
      <InterestZone key={interestZone._id} interestZone={interestZone} />
    ))
  }

  deleteAllIZ(){
    Meteor.call('iz.deleteAll');
  }

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div className="container">
        <button onClick={this.backAdmin}>Back</button><br/>
        <h1>Interest Zones</h1><br/>
        <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
          <input
            type="text"
            ref="izName"
            placeholder="Interest Zone name"
            onChange={this.onHandleChangeName}
            value= {this.state.name}
          /><br/>
          <input
            type="text"
            ref="izRegion"
            placeholder="Interest Zone region"
            onChange={this.onHandleChangeRegion}
            value= {this.state.region}
          /><br/>
          <input
            type="text"
            ref="izCountry"
            placeholder="Interest Zone country"
            onChange={this.onHandleChangeCountry}
            value= {this.state.country}
          /><br/>
          <input
            type="text"
            ref="izContinent"
            placeholder="Interest Zone continent"
            onChange={this.onHandleChangeContinent}
            value= {this.state.continent}
          /><br/>
          <button type="submit">Create</button>
        </form>
        <button className="delete" onClick={this.deleteAllIZ.bind(this)}>Delete all</button>
        <DataTable collection={this.props.interestZones}/>
        <ul>
          {this.renderIZ()}
        </ul>
      </div>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allInterestZones');
  return {
    interestZones: InterestZones.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(InterestZonesList);
