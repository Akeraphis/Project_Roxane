import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FontAwesome from 'react-fontawesome'

import AccountsUIWrapper from '../AccountsUIWrapper';
import NavBar from "../NavBar";
import AdminSideBar from './AdminSideBar';

class AdministrationHome extends Component {

  render(){
    return(
      <div className = "main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h3>Administration</h3>
        </div>
      </div>
    )
  }
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user(),
  };
})(AdministrationHome);
