import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

import NavBarHome from "../NavBarHome";

export default class Questions extends Component {

  getToCircuit(e){
    e.preventDefault();
    window.location = '/circuits';
  }

  render(){
    return (
      <div className="container">
        <NavBarHome />
        <main>
          <PersonalQuestions />
          <button onClick={this.getToCircuit} className="button-start">Next</button>
        </main>
      </div>
    );
  }
}

class PersonalQuestions extends Component{

  render(){
    return(
      <div className="questions-form">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Birth date:</span>
          </div>
          <input type="date" className="form-control" placeholder="Birth Date" aria-label="Birth Date" aria-describedby="basic-addon1" />
        </div>
        <span className="male-female">
          <center>
            Gender:
          </center>
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" aria-label="Rock" id="inlineRadio1" value="rock" name="gridRadios0"/>
              <label className="form-check-label" for="inlineRadio1"><FontAwesome className="male-female" name='male' size='5x' /></label><br/>
              <input type="radio" aria-label="Rap" id="inlineRadio2" value="rap" name="gridRadios0"/>
              <label className="form-check-label" for="inlineRadio2"><FontAwesome className="male-female" name='female' size='5x' /></label><br/>
            </div>
          </div>
        </span>
        <div className="input-group center">
          About music, you are more:
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" aria-label="Rock" id="inlineRadio11" value="rock" name="gridRadios"/>
              <label className="form-check-label" for="inlineRadio11">Rock</label><br/>
              <input type="radio" aria-label="Rap" id="inlineRadio12" value="rap" name="gridRadios"/>
              <label className="form-check-label" for="inlineRadio12">Rap</label><br/>
              <input type="radio" aria-label="Electro" id="inlineRadio13" value="electro" name="gridRadios"/>
              <label className="form-check-label" for="inlineRadio13">Electro</label><br/>
              <input type="radio" aria-label="Classical" id="inlineRadio14" value="classical" name="gridRadios"/>
              <label className="form-check-label" for="inlineRadio14">Classical</label><br/>
            </div>
          </div>
        </div>
        <div className="input-group center">
          What is your favorite sport among :
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" aria-label="foot" id="inlineRadio21" value="foot" name="gridRadios2"/>
              <label className="form-check-label" for="inlineRadio21">Football</label><br/>
              <input type="radio" aria-label="yoga" id="inlineRadio22" value="yoga" name="gridRadios2"/>
              <label className="form-check-label" for="inlineRadio22">Yoga</label><br/>
              <input type="radio" aria-label="cycling" id="inlineRadio23" value="cycling" name="gridRadios2"/>
              <label className="form-check-label" for="inlineRadio23">Cycling</label><br/>
              <input type="radio" aria-label="rugby" id="inlineRadio24" value="rugby" name="gridRadios2"/>
              <label className="form-check-label" for="inlineRadio24">Rugby</label><br/>
              <input type="radio" aria-label="tennis" id="inlineRadio25" value="tennis" name="gridRadios2"/>
              <label className="form-check-label" for="inlineRadio25">Tennis</label><br/>
              <input type="radio" aria-label="board_games" id="inlineRadio26" value="board_games" name="gridRadios2"/>
              <label className="form-check-label" for="inlineRadio26">Board games and books</label><br/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
