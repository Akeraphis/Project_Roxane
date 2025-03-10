import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavBarHome from "../NavBarHome";

export default class Welcome extends Component {

  render(){
    return (
      <div className="container">
        <NavBarHome />
        <main>
          <center>
            <div className="Planning-roadtrips-s center">
              Planning roadtrips should not be a pain. We make it easy.
            </div>
            <Link to='/questions'><button className="button-start">Start</button></Link>
            <DifferentiatorsIcons />
            <TripsHighlighted/>
            <div className="-and-many-more center">
              And many more ...
            </div>
            <Link to='/questions'><button className="button-start2">Start</button></Link>
          </center>
          <WelcomeFooter/>
        </main>
      </div>
    );
  }
}

class DifferentiatorsIcons extends Component{
  render(){
    return(
      <div className="diffSection">
        <div className="diffItem">
          <img src="/Brain.png" className="Shape2"/><br/>
          <span className="diffText">AI powered</span>
        </div>
        <div className="diffItem">
          <img src="/snap.png" className="Shape2"/><br/>
          <span className="diffText">Entire circuits</span>
        </div>
        <div className="diffItem">
          <img src="/map.png" className="Shape2"/><br/>
          <span className="diffText">Fully customizable</span>
        </div>
        <div className="diffItem">
          <img src="/pushbutton.png" className="Shape2"/><br/>
          <span className="diffText">Pay once for all</span>
        </div>
        <div className="diffItem">
          <img src="/support.png" className="Shape2"/><br/>
          <span className="diffText">Premium support</span>
        </div>
      </div>
    )
  }
}


class TripsHighlighted extends Component{
  render(){
    return (
      <div className="highlighted-trips-board">
        <div className="card-deck mt-4">
          <div className="card bg-white text-white image-trip-welcome">
            <img className="card-img image-trip-welcome" src="/Homepage/Brazil.jpg" alt="Card image" />
            <div className="card-img-overlay image-trip-welcome">
              <center><span className="card-title image-trip-text">Brazil</span></center>
            </div>
          </div>
          <div className="card bg-white text-white image-trip-welcome">
            <img className="card-img image-trip-welcome" src="/Homepage/Malaysia.jpg" alt="Card image" />
            <div className="card-img-overlay image-trip-welcome">
              <center><span className="card-title image-trip-text">Malaysia</span></center>
            </div>
          </div>
          <div className="card bg-white text-white image-trip-welcome">
            <img className="card-img image-trip-welcome" src="/Homepage/USA.jpg" alt="Card image" />
            <div className="card-img-overlay image-trip-welcome">
              <center><span className="card-title image-trip-text">USA</span></center>
            </div>
          </div>
        </div>
          <div className="card-deck mt-4">
            <div className="card bg-white text-white image-trip-welcome">
              <img className="card-img image-trip-welcome" src="/Homepage/France.jpg" alt="Card image" />
              <div className="card-img-overlay image-trip-welcome">
                <center><span className="card-title image-trip-text">France</span></center>
              </div>
            </div>
            <div className="card bg-white text-white image-trip-welcome">
              <img className="card-img image-trip-welcome" src="/Homepage/Patagonia.jpg" alt="Card image" />
              <div className="card-img-overlay image-trip-welcome">
                <center><span className="card-title image-trip-text">Patagonia</span></center>
              </div>
            </div>
            <div className="card bg-white text-white image-trip-welcome">
              <img className="card-img image-trip-welcome" src="/Homepage/Italy 1.jpg" alt="Card image" />
              <div className="card-img-overlay image-trip-welcome">
                <center><span className="card-title image-trip-text">Italy</span></center>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

class WelcomeFooter extends Component{
  render(){
    return(
      <div className="container welcome-footer">
        <a className="Name-copyright-2018">AiChill Copyright 2018</a>
        <a className="About">About</a>
        <a className="FAQ">FAQ</a>
        <a className="Shape"><img src="/instagram logo-B1Trrzvgm.svg"/></a>
        <a className="Shape"><img src="/facebook.svg"/></a>
        <a className="Shape"><img src="/linkedin.svg"/></a>
        <a className="Shape"><img src="/twitter.svg"/></a>
      </div>
    )
  }
}
