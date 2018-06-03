import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { InterestZones } from '../../../../api/interestZones.js'

export default class InterestZone extends Component {

  deleteThisInterestZone(){
    Meteor.call('iz.delete', this.props.interestZone._id);
  }

  render() {
    return (
      <li>
        <button className="btn btn-confirmation" onClick={this.deleteThisInterestZone.bind(this)}>
          &times;
        </button>
        {this.props.interestZone.name}, {this.props.interestZone.region} in {this.props.interestZone.country} ({this.props.interestZone.continent})
      </li>
    );
  }
}
