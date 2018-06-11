import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Circuits } from '../../../api/circuits.js';
import CircuitCard from './CircuitCard.js';
import NavBarHome from '../NavBarHome.js'

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
        <NavBarHome />
        <span className="Our-recommendations">Our recommandations:</span>
        <div className="deck-circuits">
          <div className="card-deck deck-circuits">
            {this.props.circuits.map((a) => {
              return(
                <CircuitCard
                  key={a._id}
                  name={a.name}
                  description={a.description}
                  pictures={a.Pictures}
                  nbDays={a.totalNbDays}
                />
              )
            })}
          </div>
        </div>
        <center>
          <span className="Not-what-youre-look">Not what you're looking for?</span><br/>
          <button className="contact-us">Contact us</button><br/>
          <span className="well-design">We'll design the perfect trip for you.</span>
        </center>
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
