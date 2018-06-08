import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Circuits } from '../../../api/circuits.js';
import StopsInCircuit from './StopsInCircuit';

class CircuitSelection extends Component {
  constructor(){
    super();
    this.state= {
      selectedCircuit : {_id: "hkljqsdjq"}
    }
  };

  render(){
    return(
      <div>
        <StopsInCircuit selectedCircuit={this.state.selectedCircuit}/>
      </div>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe("allCircuits");
  return {
    circuits : Circuits.find({}).fetch()
  }
}
)(CircuitSelection)
