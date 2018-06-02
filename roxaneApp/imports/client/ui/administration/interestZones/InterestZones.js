import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import InterestZone from './InterestZone';
import { InterestZones } from '../../../../api/interestZones.js'

class InterestZonesList extends Component {

  handleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.izName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.izRegion).value.trim();
    const country = ReactDOM.findDOMNode(this.refs.izCountry).value.trim();
    const continent = ReactDOM.findDOMNode(this.refs.izContinent).value.trim();

    InterestZones.insert({
      name : name,
      region : region,
      country : country,
      continent : continent
    })

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
        <h1>Interest Zones</h1><br/>
        <button onClick={this.backAdmin.bind(this)}>Back</button>
        <ul>
          {this.renderIZ()}
        </ul><br/>
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
      </div>
    );
  }
}

export default withTracker(()=>{
  return {
    interestZones: InterestZones.find({}).fetch(),
  };
})(InterestZonesList);
