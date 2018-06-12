import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Circuits } from '../../../api/circuits.js';
import NavBarHome from '../NavBarHome.js'

export default class Trip extends Component {

  render(){
    return(
      <div>
        <NavBarHome />
        <span className="Circuit-Name">{Session.get("circuit").name}</span><br/>
        <span className="Circuit-full-descrip">{Session.get("circuit").description}</span>
      </div>
    )
  }
}
