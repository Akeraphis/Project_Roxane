import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Countries } from '../../../../api/countries.js';

class RegionCreationForm extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      country: "",
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeCountry = this.onHandleChangeCountry.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.regionName).value.trim();
    const country = ReactDOM.findDOMNode(this.refs.country).value.trim();
    Meteor.call('region.insert', name, country);
    this.setState({
      name:"",
      country: "",
    })
  }

  onHandleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onHandleChangeCountry(e){
    this.setState({
      country: e.target.value
    })
  }

  goCountryPage(e){
    e.preventDefault();
    window.location = '/administration/countries'
  }

  render() {
    return(
      <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
        <input
          type="text"
          ref="regionName"
          placeholder="Region name"
          onChange={this.onHandleChangeName}
          value= {this.state.name}
        /><br/>
        <select name="select" ref="country" value={this.state.country} onChange={this.onHandleChangeCountry}>
          {this.props.countries.map((country) => {
            return(
              <option key={country._id} value={country.name}>{country.name}</option>
            )
          })}
        </select><button className="redirect" onClick={this.goCountryPage}>+ Country</button>
        <br/>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allCountries');
  return {
    countries: Countries.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(RegionCreationForm);
