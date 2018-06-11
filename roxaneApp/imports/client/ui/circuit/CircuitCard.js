import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class CircuitCard extends Component {

  getImage = (pictures) => {
    let res = "";
    pictures.length>1 ? res=pictures[0] : res="";
    return res;
  }

  render(){
    return(
      <div className="Rectangle-3">
        <img className="card-img-top Rectangle-4" src={this.getImage(this.props.pictures)}/>

        <div className="Rectangle-5">
          <span className="card-title Circuit-Name">{this.props.name}</span><br/>
          <span className="-nights-and-stops">{this.props.nbDays} nights & X stops</span><br/>
          <span className="Circuit-summary-max">{this.props.description}</span><br/><br/>
          <div className="highlights-div">
            <img className="star-ip" src="/Circuits/star.png"/><span className="Highlights">IP1</span><br/>
            <img className="star-ip" src="/Circuits/star.png"/><span className="Highlights">IP2</span><br/>
            <img className="star-ip" src="/Circuits/star.png"/><span className="Highlights">IP3</span><br/>
          </div>
          <center>
            <button className="Learn-more">Learn more</button>
          </center>
        </div>

      </div>
    )
  }
}
