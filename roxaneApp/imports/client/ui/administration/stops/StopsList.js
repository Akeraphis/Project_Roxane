import React, { Component } from 'react'

export default class StopsList extends Component {

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return (
      <div>
        <button onClick={this.backAdmin.bind(this)}>Back</button><br/>
        <h1>Stops</h1>
      </div>
    )
  }
}
