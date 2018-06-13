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
