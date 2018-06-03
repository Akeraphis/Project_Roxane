import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Continents } from '../../../../api/continents.js';
import Continent from './Continent';

class ContinentsList extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
    }
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
  };

  onHandleSubmit(e){
    e.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.continentName).value.trim();
    Meteor.call('continent.insert', name);
    this.setState({
      name:"",
    })
  }

  onHandleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  renderContinent(){
    return this.props.continents.map((continent)=> (
      <Continent key={continent._id} continent={continent} />
    ))
  }

  backAdmin(e){
    e.preventDefault();
    window.location = '/administration';
  }

  render(){
    return(
      <div className="container">
        <button onClick={this.backAdmin}>Back</button>
        <h1>Continents</h1><br/>
        <form className="new" onSubmit={this.onHandleSubmit.bind(this)}>
          <input
            type="text"
            ref="continentName"
            placeholder="Continent name"
            onChange={this.onHandleChangeName}
            value= {this.state.name}
          /><br/>
          <button type="submit">Create</button>
        </form>
        <ul>
          {this.renderContinent()}
        </ul>
      </div>
    );
  }
}


export default withTracker(()=>{
  Meteor.subscribe('allContinents');
  return {
    continents: Continents.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(ContinentsList);
