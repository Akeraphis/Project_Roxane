import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import { InterestPoints } from '../../../../api/interestPoints.js';
import InterestPointsCreationForm from './InterestPointsCreationForm'
import DataTable from '../../../standardComponents/react_table.js'
import NavBar from "../../NavBar";
import AdminSideBar from '../AdminSideBar';

class InterestPointsList extends Component {

  deleteAllIPs(){
    Meteor.call('ip.deleteAll');
  }

  importIPs(){
    console.log("--- importing list of IPs ---");
    Meteor.call('importIPsFromJson');
  }

  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h1>Interest Points</h1>
          <InterestPointsCreationForm />
          <br/>
          <button className="delete" onClick={this.deleteAllIPs.bind(this)}>Delete all</button>
          <br/><br/>
          <button className="btn btn-import" onClick={this.importIPs}>Import</button>
          <br/><br/>
          <DataTable collection={this.props.interestPoints}/>
        </div>
      </div>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allIPs');
  return {
    interestPoints: InterestPoints.find({}).fetch(),
  };
})(InterestPointsList);
