import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { InterestZones } from '../../../../api/continents.js'

export default class Continent extends Component {

  deleteThisContinent(){
    Meteor.call('continent.delete', this.props.continent._id);
  }

  render() {
    return (
      <li>
        <button className="delete" onClick={this.deleteThisContinent.bind(this)}>
          &times;
        </button>
        {this.props.continent.name}
      </li>
    );
  }
}
