import React, { Component } from 'react';

export default class InterestZone extends Component {
  render() {
    return (
      <li>{this.props.interestZone.name}, {this.props.interestZone.region} in {this.props.interestZone.country} ({this.props.interestZone.continent})</li>
    );
  }
}
