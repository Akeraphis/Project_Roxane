import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import InterestZone from './InterestZone';
import IZCreationForm from './IZCreationForm';
import { InterestZones } from '../../../../api/interestZones.js';
import DataTable from '../../../standardComponents/react_table.js';

class InterestZonesList extends Component {

  renderIZ(){
    return this.props.interestZones.map((interestZone)=> (
      <InterestZone key={interestZone._id} interestZone={interestZone} />
    ))
  }

  deleteAllIZ(){
    Meteor.call('iz.deleteAll');
  }

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div className="container">
        <button onClick={this.backAdmin}>Back</button><br/>
        <h1>Interest Zones</h1><br/>
        <IZCreationForm />
        <button className="delete" onClick={this.deleteAllIZ.bind(this)}>Delete all</button>
        <DataTable collection={this.props.interestZones}/>
        <ul>
          {this.renderIZ()}
        </ul>
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
