import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Circuits } from '../../../api/circuits.js';
import NavBarHome from '../NavBarHome.js';
import MapCircuit from '../circuit/MapCircuit.js';
import StopBloc from './StopBloc';

export default class Trip extends Component {

  render(){
    return(
      <div>
        <NavBarHome />
        <span className="Circuit-Name-2">{Session.get("circuit").name}</span><span className="matchCirc"><img src="/warm symbol.png" className="matchSymbol" /><span className="Hot-match">Hot match</span></span><br/>
        <span className="Circuit-full-descrip">{Session.get("circuit").description}</span>
        <div className="mapContainer">
          <MapCircuit />
        </div>
        <div className="HighlightPicsBloc">
          {Session.get("circuit").pictures.map((a)=>{
            return(
              <img className="HighlightPic" src={a}/>
            )
          })}
        </div>
        <span className="DepRetDate">{Session.get("depDate")} - {Session.get("retDate")}</span><br/>
        <div className="StopBlocs">
          {Session.get("circuit").stops.map((a)=>{
            return(
              <StopBloc
                key={a.stop}
                id = {a.stop}
                stop={a}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
