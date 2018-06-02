import React, { Component } from 'react';

import { InterestZones } from '../../../../api/interestZones.js'

export default class InterestZone extends Component {

  deleteThisInterestZone(){
    InterestZones.remove(this.props.interestZone._id);
  }

  render() {
    return (
      <li>
        <button className="delete" onClick={this.deleteThisInterestZone.bind(this)}>
          &times;
        </button>
        {this.props.interestZone.name}, {this.props.interestZone.region} in {this.props.interestZone.country} ({this.props.interestZone.continent})
      </li>
    );
  }
}
