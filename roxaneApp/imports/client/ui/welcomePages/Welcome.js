import React, { Component } from 'react';

import NavBarHome from "../NavBarHome";

export default class Welcome extends Component {

  clickOnStart(e){
    e.preventDefault();
    window.location='/questions';
  }

  render(){
    return (
      <div className="container">
        <NavBarHome />
        <main>
          <div className="Planning-roadtrips-s center">
            Planning roadtrips should not be a pain. We make it easy.
          </div>
          <button className="button-start" onClick={this.clickOnStart}>Start</button>
          <DifferentiatorsIcons />
          <TripsHighlighted/>
          <div className="-and-many-more center">
            And many more ...
          </div>
          <button className="button-start2" onClick={this.clickOnStart}>Start</button>
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
        <img src="/Brain.png" className="Shape2"/>
        <img src="/map.png" className="Shape2"/>
        <img src="/pushbutton.png" className="Shape2"/>
        <img src="/snap.png" className="Shape2"/>
        <img src="/support.png" className="Shape2"/><br/>
        <span className="diffText">AI powered</span>
        <span className="diffText">Customized trips</span>
        <span className="diffText">Sit and relax</span>
        <span className="diffText">Pay once for all</span>
        <span className="diffText">Premium support</span>
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
            <img className="card-img image-trip-welcome" src="/Homepage/USA.jpg" alt="Card image" />
            <div className="card-img-overlay image-trip-welcome">
              <center><h5 className="card-title image-trip-text">USA</h5></center>
            </div>
          </div>
          <div className="card bg-white text-white image-trip-welcome">
            <img className="card-img image-trip-welcome" src="/Homepage/Brazil.jpg" alt="Card image" />
            <div className="card-img-overlay image-trip-welcome">
              <center><h5 className="card-title image-trip-text">Brazil</h5></center>
            </div>
          </div>
          <div className="card bg-white text-white image-trip-welcome">
            <img className="card-img image-trip-welcome" src="/Homepage/Italy 1.jpg" alt="Card image" />
            <div className="card-img-overlay image-trip-welcome">
              <center><h5 className="card-title image-trip-text">Italy</h5></center>
            </div>
          </div>
        </div>
          <div className="card-deck mt-4">
            <div className="card bg-white text-white image-trip-welcome">
              <img className="card-img image-trip-welcome" src="/Homepage/France.jpg" alt="Card image" />
              <div className="card-img-overlay image-trip-welcome">
                <center><h5 className="card-title image-trip-text">France</h5></center>
              </div>
            </div>
            <div className="card bg-white text-white image-trip-welcome">
              <img className="card-img image-trip-welcome" src="/Homepage/Patagonia.jpg" alt="Card image" />
              <div className="card-img-overlay image-trip-welcome">
                <center><h5 className="card-title image-trip-text">Argentina</h5></center>
              </div>
            </div>
            <div className="card bg-white text-white image-trip-welcome">
              <img className="card-img image-trip-welcome" src="/Homepage/Malaysia.jpg" alt="Card image" />
              <div className="card-img-overlay image-trip-welcome">
                <center><h5 className="card-title image-trip-text">Malaysia</h5></center>
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
