import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Continents } from '../../../../api/continents.js';

class CountryCreationForm extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      continent: "",
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeContinent = this.onHandleChangeContinent.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.countryName).value.trim();
    const continent = ReactDOM.findDOMNode(this.refs.continent).value.trim();
    Meteor.call('country.insert', name, continent);
    this.setState({
      name:"",
      continent: "",
    })
  }

  onHandleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onHandleChangeContinent(e){
    this.setState({
      continent: e.target.value
    })
  }

  goContinentPage(e){
    e.preventDefault();
    window.location = '/administration/continents'
  }

  render() {
    return(
      <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
        <input
          type="text"
          ref="countryName"
          placeholder="Country name"
          onChange={this.onHandleChangeName}
          value= {this.state.name}
        /><br/>
        <select name="select" ref="continent" value={this.state.continent} onChange={this.onHandleChangeContinent}>
          {this.props.continents.map((continent) => {
            return(
              <option key={continent._id} value={continent.name}>{continent.name}</option>
            )
          })}
        </select><button className="redirect" onClick={this.goContinentPage}>+ Continent</button>
        <br/>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allContinents');
  return {
    continents: Continents.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(CountryCreationForm);
