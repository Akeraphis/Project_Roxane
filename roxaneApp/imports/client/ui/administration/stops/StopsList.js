import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import { Stops } from '../../../../api/stops.js';
import StopsCreationForm from './StopsCreationForm'
import DataTable from '../../../standardComponents/react_table.js'

class StopsList extends Component {

  deleteAllStops(){
    Meteor.call('stops.deleteAll');
  }

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div>
        <button onClick={this.backAdmin}>Back</button><br/>
        <h1>Stops</h1>
        <StopsCreationForm />
        <button className="delete" onClick={this.deleteAllStops.bind(this)}>Delete all</button>
        <DataTable collection={this.props.stops}/>
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
