import React, { Component } from 'react'

import AccountsUIWrapper from '../AccountsUIWrapper';

export default class AdministrationHome extends Component {

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
        <button onClick={this.iZClick.bind(this)} className="btn-link">Interest Zones</button>
        <button onClick={this.userClick.bind(this)} className="btn-link">Users</button>
        <button onClick={this.stopsClick.bind(this)} className="btn-link">Stops</button>
      </div>
    )
  }
}
