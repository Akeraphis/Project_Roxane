import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Regions } from '../../../../api/regions.js';

class IZCreationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      region: "",
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeRegion = this.onHandleChangeRegion.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this.refs.izName).value.trim();
    const region = ReactDOM.findDOMNode(this.refs.izRegion).value.trim();

    Meteor.call('iz.insert', name, region);

    this.setState({
      name : "",
      region: "",
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

  render(){
    return(
      <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
        <input
          type="text"
          ref="izName"
          placeholder="Interest Zone name"
          onChange={this.onHandleChangeName}
          value= {this.state.name}
        /><br/>
        <select name="select" ref="izRegion" value={this.state.region} onChange={this.onHandleChangeRegion}>
          {this.props.regions.map((region) => {
            return(
              <option key={region._id} value={region.name}>{region.name}</option>
            )
          })}
        </select>
        <br/>
        <button type="submit" className="btn btn-text">Create</button>
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
})(IZCreationForm);
