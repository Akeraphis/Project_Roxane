import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Regions } from '../../../../api/regions.js';
import RegionCreationForm from './RegionCreationForm';
import DataTable from '../../../standardComponents/react_table.js';

class RegionsList extends Component {

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return(
      <div className="container">
        <button onClick={this.backAdmin}>Back</button>
        <h1>Regions</h1><br/>
        <RegionCreationForm/><br/>
        <DataTable collection={this.props.regions}/>
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
