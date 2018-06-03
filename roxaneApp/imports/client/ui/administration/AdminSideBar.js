import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import FontAwesome from 'react-fontawesome'

class AdminSideBar extends Component {

  render(){
    return(
      <div className='container'>
      <div className="side-nav">
        { this.props.currentUser ? <a href="/administration/users"><FontAwesome name='user' size='2x' /> Users</a> : ""}
        { this.props.currentUser ? <a href="/administration/continents"><FontAwesome name='globe' size='2x' /> Continents</a> : ""}
        { this.props.currentUser ? <a href="/administration/countries"><FontAwesome name='flag' size='2x' /> Countries</a> : ""}
        { this.props.currentUser ? <a href="/administration/regions"><FontAwesome name='registered' size='2x' />egions</a> : ""}
        { this.props.currentUser ? <a href="/administration/interestZones"><FontAwesome name='thumbs-up' size='2x' /> Interest Zones</a> : ""}
        { this.props.currentUser ? <a href="/administration/stops"><FontAwesome name='stop' size='2x' /> Stops</a> : ""}
        { this.props.currentUser ? <a href="/administration/interestPoints"><FontAwesome name='star' size='2x' /> Interest Points</a> : ""}
      </div>
    </div>
    )
  }
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user(),
  };
})(AdminSideBar);
