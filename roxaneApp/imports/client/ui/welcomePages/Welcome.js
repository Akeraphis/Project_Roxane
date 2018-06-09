import React, { Component } from 'react';

import NavBar from "../NavBar";
import NavBarHome from "../NavBarHome"

export default class Welcome extends Component {

  clickOnStart(e){
    e.preventDefault();
    window.location='/questions';
  }

  render(){
    return (
      <div>
        <NavBarHome />
        <main>
          <div className="Planning-roadtrips-s">
            Planning roadtrips should not be a pain. We make it easy.
          </div>
          <button className="button-start" onClick={this.clickOnStart}>Start</button>
          <div className="highlighted-trips-board">
            <img className="image-trip-welcome" src="../../../../materials/Homepage/USA.jpg" />
          </div>
        </main>
      </div>
    );
  }
}
