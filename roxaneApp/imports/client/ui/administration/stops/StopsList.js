import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import { Stops } from '../../../../api/stops.js';
import StopsCreationForm from './StopsCreationForm'
import DataTable from '../../../standardComponents/react_table.js'
import NavBar from "../../NavBar";
import AdminSideBar from '../AdminSideBar';

class StopsList extends Component {

  deleteAllStops(){
    Meteor.call('stops.deleteAll');
  }

  importStops(){
    console.log("--- importing list of stops ---");
    Meteor.call('importStopsFromJson');
  }

  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h1>Stops</h1>
          <StopsCreationForm />
          <br/>
          <button className="delete" onClick={this.deleteAllStops.bind(this)}>Delete all</button>
          <br/><br/>
          <button className="btn btn-import" onClick={this.importStops}>Import</button>
          <br/><br/>
          <DataTable collection={this.props.stops}/>
        </div>
      </div>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allStops');
  return {
    stops: Stops.find({}).fetch(),
  };
})(StopsList);
