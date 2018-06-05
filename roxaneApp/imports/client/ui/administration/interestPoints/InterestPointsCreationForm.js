import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Regions } from '../../../../api/regions.js';
import { InterestPoints } from '../../../../api/interestPoints.js';

class InterestPointsCreationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      region: "",
      latitude: "",
      longitude: "",
      category: "",
      description: ""
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeRegion = this.onHandleChangeRegion.bind(this);
    this.onHandleChangeLatitude = this.onHandleChangeLatitude.bind(this);
    this.onHandleChangeLongitude = this.onHandleChangeLongitude.bind(this);
    this.onHandleChangeCategory = this.onHandleChangeCategory.bind(this);
    this.onHandleChangeDescription = this.onHandleChangeDescription.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.ipName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.ipRegion).value.trim();
    const latitude = ReactDOM.findDOMNode(this.refs.ipLatitude).value.trim();
    const longitude = ReactDOM.findDOMNode(this.refs.ipLongitude).value.trim();
    const description = ReactDOM.findDOMNode(this.refs.ipDescription).value.trim();
    const category = ReactDOM.findDOMNode(this.refs.ipCategory).value.trim();

    Meteor.call('ip.insert', name, region, latitude, longitude, description, category);

    this.setState({
      name : "",
      region: "",
      latitude: "",
      longitude: "",
      description: "",
      category: ""
    })
  }

  onHandleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onHandleChangeRegion(e){
    this.setState({
      region: e.target.value
    })
  }

  onHandleChangeLatitude(e){
    this.setState({
      latitude: e.target.value
    })
  }

  onHandleChangeLongitude(e){
    this.setState({
      longitude: e.target.value
    })
  }

  onHandleChangeDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  onHandleChangeCategory(e){
    this.setState({
      category: e.target.value
    })
  }

  render(){
    return(
      <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
        <input
          type="text"
          ref="ipName"
          placeholder="IP name"
          onChange={this.onHandleChangeName}
          value= {this.state.name}
        /><br/>
        <select name="select" ref="ipRegion" value={this.state.region} onChange={this.onHandleChangeRegion}>
          {this.props.regions.map((region) => {
            return(
              <option key={region._id} value={region.name}>{region.name}</option>
            )
          })}
        </select>
        <br/>
        <input
          type="text"
          ref="ipLatitude"
          placeholder="IP latitude"
          onChange={this.onHandleChangeLatitude}
          value= {this.state.latitude}
        /><br/>
        <input
          type="text"
          ref="ipLongitude"
          placeholder="IP longitude"
          onChange={this.onHandleChangeLongitude}
          value= {this.state.longitude}
        /><br/>
        <input
          type="text"
          ref="ipDescription"
          placeholder="IP description"
          onChange={this.onHandleChangeDescription}
          value= {this.state.description}
        /><br/>
        <input
          type="text"
          ref="ipCategory"
          placeholder="IP category"
          onChange={this.onHandleChangeCategory}
          value= {this.state.category}
        /><br/>
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allRegions');
  return {
    regions: Regions.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(InterestPointsCreationForm);
