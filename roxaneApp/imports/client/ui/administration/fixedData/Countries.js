import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Countries } from '../../../../api/countries.js';
import CountryCreationForm from './CountryCreationForm';
import DataTable from '../../../standardComponents/react_table.js';
import NavBar from "../../NavBar";
import AdminSideBar from '../AdminSideBar';

class CountriesList extends Component {

  importCountries(){
    console.log("--- importing list of countries ---");
    Meteor.call('importCountriesFromXLS');
  }

  render(){
    return(
      <div className="main-layout">
        <NavBar />
        <AdminSideBar />
        <div className="right-side-nav">
          <h1>Countries</h1><br/>
          <CountryCreationForm/><br/>
          <button className="btn btn-import" onClick={this.importCountries}>Import</button>
          <DataTable collection={this.props.countries}/>
        </div>
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
