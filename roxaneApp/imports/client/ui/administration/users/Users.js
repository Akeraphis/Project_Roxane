import React, { Component } from 'react';

export default class Users extends Component {

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div>
        <h1>Users</h1>
        <button onClick={this.backAdmin.bind(this)}>Back</button>
      </div>
    );
  }
}
