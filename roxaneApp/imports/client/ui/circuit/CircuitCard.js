import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';


export default class CircuitCard extends Component {

  getImage(pictures){
    let res = "";
    pictures.length>1 ? res=pictures[0] : res="";
    return res;
  }

  getToCircuitDetail(){
    Session.set("circuit", this.props)
  }

  render(){
    return(
      <div className="Rectangle-3">
        <img className="card-img-top Rectangle-4" src={this.getImage(this.props.pictures)}/>
        <span className="MatchSpan"><span className="Hot-match">Hot match</span></span>
        <div className="Rectangle-5">
          <span className="Circuit-Name">{this.props.name}</span><br/>
          <span className="price-circuit">1000 € - 1500 €</span>
          <br/>
          <span className="-nights-and-stops">{this.props.nbDays} nights & X stops</span><br/>
          <span className="Circuit-summary-max">{this.props.description}</span><br/><br/>
          <div className="highlights-div">
            <img className="star-ip" src="/Circuits/star.png"/><span className="Highlights">IP1</span><br/>
            <img className="star-ip" src="/Circuits/star.png"/><span className="Highlights">IP2</span><br/>
            <img className="star-ip" src="/Circuits/star.png"/><span className="Highlights">IP3</span><br/>
          </div>
          <center>
            <Link to='/trip'><button className="Learn-more" onClick={this.getToCircuitDetail.bind(this)}>Learn more</button></Link>
          </center>
        </div>

      </div>
    )
  }
}
