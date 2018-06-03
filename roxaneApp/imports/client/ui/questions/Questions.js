import React, { Component } from 'react';

import NavBar from "../NavBar";

export default class Questions extends Component {
  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <main>
          <button className="btn btn-primary">Next</button>
        </main>
      </div>
    );
  }
}
