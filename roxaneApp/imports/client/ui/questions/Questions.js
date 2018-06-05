import React, { Component } from 'react';

import NavBar from "../NavBar";

export default class Questions extends Component {

  getToCircuit(e){
    e.preventDefault();
    window.location = '/circuits';
  }

  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <main>
          <button onClick={this.getToCircuit} className="btn btn-primary">Next</button>
        </main>
      </div>
    );
  }
}
