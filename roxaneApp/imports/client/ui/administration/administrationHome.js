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

  render(){
    return(
      <div>
        <h1>Administration</h1>
        <AccountsUIWrapper /><br/>
        { this.props.currentUser ? <button onClick={this.iZClick.bind(this)} className="btn-link">Interest Zones</button> : ""}
        { this.props.currentUser ? <button onClick={this.userClick.bind(this)} className="btn-link">Users</button> : ""}
        { this.props.currentUser ? <button onClick={this.stopsClick.bind(this)} className="btn-link">Stops</button> : ""}
      </div>
    )
  }
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user(),
  };
})(AdministrationHome);
