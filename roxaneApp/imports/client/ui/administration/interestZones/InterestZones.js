import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import InterestZone from './InterestZone';
import { InterestZones } from '../../../../api/interestZones.js'

class InterestZonesList extends Component {

  handleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.izName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.izRegion).value.trim();
    const country = ReactDOM.findDOMNode(this.refs.izCountry).value.trim();
    const continent = ReactDOM.findDOMNode(this.refs.izContinent).value.trim();

    Meteor.call('iz.insert', name, region, country, continent);

  }

  renderIZ(){
    return this.props.interestZones.map((interestZone)=> (
      <InterestZone key={interestZone._id} interestZone={interestZone} />
    ))
  }

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div className="container">
        <button onClick={this.backAdmin.bind(this)}>Back</button><br/>
        <h1>Interest Zones</h1><br/>
        <form className="new-IZ" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="izName"
            placeholder="Interest Zone name"
          /><br/>
          <input
            type="text"
            ref="izRegion"
            placeholder="Interest Zone region"
          /><br/>
          <input
            type="text"
            ref="izCountry"
            placeholder="Interest Zone country"
          /><br/>
          <input
            type="text"
            ref="izContinent"
            placeholder="Interest Zone continent"
          /><br/>
          <button type="submit">Create</button>
        </form>
        <ul>
          {this.renderIZ()}
        </ul><br/>
      </div>
    );
  }
}

export default withTracker(()=>{
  return {
    interestZones: InterestZones.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(InterestZonesList);
