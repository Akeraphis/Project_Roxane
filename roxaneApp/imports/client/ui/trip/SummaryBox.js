import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Stops } from '../../../api/stops.js';

class SummaryBox extends Component{

  getStopName(stopID) {
    let s = Stops.findOne({_id: stopID});
    if(s){
      return s.name;
    }
  }

  render(){
    return(
      <div className="SummaryBox">
        <div className="sum-title-box">
          <center>
            <span className="Summary text-style-1"><b>Summary</b></span><br/>
            <span className="Summary">10 days</span><br/>
            <span className="Summary">9 nights</span><br/>
            <span className="Summary">3 stops</span><br/>
          </center>
        </div>
        <ul className="sum-stop-list">
          {Session.get("circuit").stops.map((a)=>{
            const Name= this.getStopName(a.stop);
            return(
              <li className="sum-stop-list-text">{Name}, {a.NbDays} nights</li>
            )
          })}
        </ul>
        <div className="sum-price-box">
          <center>
            <img src="hotels/002-plane.png" className="hotelSymbol"/>
            <span className="sum-price-text">800€</span><br/>
            <img src="hotels/001-sports-car.png" className="hotelSymbol"/>
            <span className="sum-price-text">800€</span><br/>
            <img src="hotels/001-hotel-1.png" className="hotelSymbol"/>
            <span className="sum-price-text">800€</span><br/>
            <img src="hotels/substract.png" className="substract"/><br/>
            <span className="sum-price-text"><b>2400€</b></span>
          </center>
        </div>
        <center><button className="btn-book">Book</button></center>
      </div>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe("allStops");
  return {
    stops : Stops.find({}).fetch()
  }
}
)(SummaryBox)
