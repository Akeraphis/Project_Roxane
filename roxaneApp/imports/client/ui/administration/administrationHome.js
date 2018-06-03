import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../AccountsUIWrapper';
import NavBar from "../NavBar";

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
      <div className = "main-layout">
        <NavBar />
        <h1>Administration</h1>
        { this.props.currentUser ? <button onClick={this.iZClick} className="btn-link">Interest Zones</button> : ""}<br/><br/>
        { this.props.currentUser ? <button onClick={this.userClick} className="btn-link">Users</button> : ""}<br/><br/>
        { this.props.currentUser ? <button onClick={this.stopsClick} className="btn-link">Stops</button> : ""}<br/><br/>
        { this.props.currentUser ? <button onClick={this.continentsClick} className="btn-link">Continents</button> : ""}<br/><br/>
        { this.props.currentUser ? <button onClick={this.countriesClick} className="btn-link">Countries</button> : ""}<br/><br/>
        { this.props.currentUser ? <button onClick={this.regionsClick} className="btn-link">Regions</button> : ""}<br/><br/>
      </div>
    )
  }
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user(),
  };
})(AdministrationHome);
