import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import { Users } from '../../../../api/users.js'
import DataTable from '../../../standardComponents/react_table.js'

class AdminUsers extends Component {

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div>
        <h1>Users</h1>
        <button onClick={this.backAdmin.bind(this)}>Back</button>
        <DataTable collection={this.props.users}/>
      </div>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allUsers');
  return {
    users: Users.find({}).fetch(),
  };
})(AdminUsers);
