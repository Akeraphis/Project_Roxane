import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../AccountsUIWrapper';

class AdministrationHome extends Component {

  iZClick(e){
    e.preventDefault();
    window.location = '/administration/interestZones'
  }

  userClick(e){
    e.preventDefault();
    window.location = 'administration/users'
  }

  stopsClick(e){
    e.preventDefault();
    window.location = 'administration/stops'
  }

  continentsClick(e){
    e.preventDefault();
    window.location = 'administration/continents'
  }

  countriesClick(e){
    e.preventDefault();
    window.location = 'administration/countries'
  }

  regionsClick(e){
    e.preventDefault();
    window.location = 'administration/regions'
  }

  render(){
    return(
      <div>
        <h1>Administration</h1>
        <AccountsUIWrapper /><br/>
        { this.props.currentUser ? <button onClick={this.iZClick} className="btn-link">Interest Zones</button> : ""}
        { this.props.currentUser ? <button onClick={this.userClick} className="btn-link">Users</button> : ""}
        { this.props.currentUser ? <button onClick={this.stopsClick} className="btn-link">Stops</button> : ""}
        { this.props.currentUser ? <button onClick={this.continentsClick} className="btn-link">Continents</button> : ""}
        { this.props.currentUser ? <button onClick={this.countriesClick} className="btn-link">Countries</button> : ""}
        { this.props.currentUser ? <button onClick={this.regionsClick} className="btn-link">Regions</button> : ""}
      </div>
    )
  }
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user(),
  };
})(AdministrationHome);
