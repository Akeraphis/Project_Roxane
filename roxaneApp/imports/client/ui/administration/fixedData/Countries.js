import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Countries } from '../../../../api/countries.js';
import CountryCreationForm from './CountryCreationForm';
import DataTable from '../../../standardComponents/react_table.js';

class CountriesList extends Component {

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return(
      <div className="container">
        <button onClick={this.backAdmin}>Back</button>
        <h1>Countries</h1><br/>
        <CountryCreationForm/><br/>
        <DataTable collection={this.props.countries}/>
      </div>
    );
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allCountries');
  return {
    countries: Countries.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(CountriesList);
