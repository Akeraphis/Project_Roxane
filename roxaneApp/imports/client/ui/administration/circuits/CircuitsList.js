import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import { Circuits } from '../../../../api/circuits.js';
import CircuitsCreationForm from './CircuitsCreationForm'
import DataTable from '../../../standardComponents/react_table.js'
import NavBar from "../../NavBar";
import AdminSideBar from '../AdminSideBar';

class CircuitsList extends Component {

  deleteAllCircuits(){
    Meteor.call('circuits.deleteAll');
  }

  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h1>Circuits</h1>
          <CircuitsCreationForm />
          <br/>
          <button className="delete" onClick={this.deleteAllCircuits.bind(this)}>Delete all</button>
          <br/><br/>
          <DataTable collection={this.props.circuits}/>
        </div>
      </div>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allCircuits');
  return {
    circuits: Circuits.find({}).fetch(),
  };
})(CircuitsList);
