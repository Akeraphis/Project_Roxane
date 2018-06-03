import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Regions } from '../../../../api/regions.js';
import RegionCreationForm from './RegionCreationForm';
import DataTable from '../../../standardComponents/react_table.js';
import NavBar from "../../NavBar";
import AdminSideBar from '../AdminSideBar';

class RegionsList extends Component {

  render(){
    return(
      <div className="main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h1>Regions</h1><br/>
          <RegionCreationForm/><br/>
          <DataTable collection={this.props.regions}/>
        </div>
      </div>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allRegions');
  return {
    regions: Regions.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(RegionsList);
