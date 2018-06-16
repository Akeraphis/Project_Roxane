import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Stops } from '../../../api/stops.js';

class StopBloc extends Component{

  getStopName() {
    let s = Stops.findOne({_id: this.props.id});
    if(s){
      return s.name;
    }
  }

  getStopPic(){
    let s = Stops.findOne({_id: this.props.id});
    if(s){
      if (s.picture!=""){
        return s.picture;
      }
      else{
        return "/default.jpg"
      }
    }
  }

  render(){
    const Name= this.getStopName()
    const Pic = this.getStopPic()
    return(
      <div className="StopBloc">
        <span className="stopName">{Name}, {this.props.stop.NbDays} days recommended</span>
        <div className='stopPicturesBloc'>
          <img className="stopPic" src={Pic}/>
          <img className="stopPic" src={Pic}/>
          <img className="stopPic" src={Pic}/>
        </div>
        <div className="hotelInfos">
          <img src="/hotels/001-hotel-1.png" className="hotelSymbol"/>
          <label className="hotelName">Hotel Splendid</label>
          <img src="/hotels/009-star-1.png" className="hotelSymbol"/>
          <img src="/hotels/009-star-1.png" className="hotelSymbol"/>
          <img src="/hotels/009-star-1.png" className="hotelSymbol"/>
          <img src="/hotels/009-star-1.png" className="hotelSymbol"/>
          <img src="/hotels/008-star.png" className="hotelSymbol"/>
          <label className="hotelRatings">135 ratings</label>
          <label className="hotelDistanceFromCenter">300m from city center</label>
          <label className="hotelNights">{this.props.stop.NbDays} nights</label>
        </div>
        <div className='hotelPicturesBloc'>
          <img className="hotelPic" src={Pic}/>
          <img className="hotelPic" src={Pic}/>
          <img className="hotelPic" src={Pic}/>
        </div>
        <div className="hotelDetailsBlock">
          <img src="/hotels/007-man-user.png" className="hotelDetailSymbol"/>
          <label className="nbGuests">2 guests</label>
          <img src="/hotels/006-double-king-size-bed.png" className="hotelDetailSymbol"/>
          <label className="nbBeds">1 bed</label>
          <img src="/hotels/005-open-exit-door.png" className="hotelDetailSymbol"/>
          <label className="nbRooms">1 room</label>
          <img src="/hotels/004-wifi-connection-signal-symbol.png" className="hotelDetailSymbol"/>
          <img src="/hotels/003-television.png" className="hotelDetailSymbol"/>
          <img src="/hotels/002-restaurant.png" className="hotelDetailSymbol"/>
        </div>
        <button className="changeHotelBtn">Change Hotel</button>
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
)(StopBloc)
