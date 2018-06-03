import React, { Component } from 'react';

import NavBar from "../NavBar";

export default class Welcome extends Component {

  clickOnStart(e){
    e.preventDefault();
    window.location='/questions';
  }

  render(){
    return (
      <div className="main-layout">
        <NavBar />
        <main>
          <button className="btn btn-primary" onClick={this.clickOnStart}>Start</button>
        </main>
      </div>
    );
  }
}
