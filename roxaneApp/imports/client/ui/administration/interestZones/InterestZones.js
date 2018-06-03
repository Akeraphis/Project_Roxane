import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import InterestZone from './InterestZone';
import IZCreationForm from './IZCreationForm';
import { InterestZones } from '../../../../api/interestZones.js';
import DataTable from '../../../standardComponents/react_table.js';
import NavBar from "../../NavBar";
import AdminSideBar from '../AdminSideBar';

class InterestZonesList extends Component {

  renderIZ(){
    return this.props.interestZones.map((interestZone)=> (
      <InterestZone key={interestZone._id} interestZone={interestZone} />
    ))
  }

  deleteAllIZ(){
    Meteor.call('iz.deleteAll');
  }

  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h1>Interest Zones</h1><br/>
          <IZCreationForm /><br/>
          <button className="btn btn-confirmation" onClick={this.deleteAllIZ.bind(this)}>Delete all</button><br/>
          <br/><br/>
          <DataTable collection={this.props.interestZones}/>
          <ul>
            {this.renderIZ()}
          </ul>
        </div>
      </div>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allInterestZones');
  return {
    interestZones: InterestZones.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(InterestZonesList);
