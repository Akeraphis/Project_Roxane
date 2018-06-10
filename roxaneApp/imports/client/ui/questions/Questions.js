import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ReactDOM from 'react-dom';

import NavBarHome from "../NavBarHome";

export default class Questions extends Component {
  constructor(){
    super();
    this.state={
      group : "",
      gender : "",
      music : "",
      sport: ""
    }
    this.onChangeGroupAlone = this.onChangeGroupAlone.bind(this);
    this.onChangeGroupCouple = this.onChangeGroupCouple.bind(this);
    this.onChangeGroupFamily = this.onChangeGroupFamily.bind(this);
    this.onChangeGroupFriends = this.onChangeGroupFriends.bind(this);
    this.onChangeGenderMale = this.onChangeGenderMale.bind(this);
    this.onChangeGenderFemale = this.onChangeGenderFemale.bind(this);
    this.onChangeMusicRock = this.onChangeMusicRock.bind(this);
    this.onChangeMusicClassical = this.onChangeMusicClassical.bind(this);
    this.onChangeMusicRap = this.onChangeMusicRap.bind(this);
    this.onChangeMusicJazz = this.onChangeMusicJazz.bind(this);
    this.onChangeSportYoga = this.onChangeSportYoga.bind(this);
    this.onChangeSportRugby = this.onChangeSportRugby.bind(this);
    this.onChangeSportTennis = this.onChangeSportTennis.bind(this);
    this.onChangeSport3Period = this.onChangeSport3Period.bind(this);
    this.onChangeSportCycling = this.onChangeSportCycling.bind(this);
    this.onChangeSportFootball = this.onChangeSportFootball.bind(this);
  }

  onChangeGroupAlone(e){
    e.preventDefault();
    this.setState({
      group: "alone"
    });
  }

  onChangeGroupCouple(e){
    e.preventDefault();
    this.setState({
      group: "couple"
    });
  }

  onChangeGroupFamily(e){
    e.preventDefault();
    this.setState({
      group: "family"
    });
  }

  onChangeGroupFriends(e){
    e.preventDefault();
    this.setState({
      group: "friends"
    });
  }

  onChangeGenderMale(e){
    e.preventDefault();
    this.setState({
      gender: "male"
    });
  }

  onChangeGenderFemale(e){
    e.preventDefault();
    this.setState({
      gender: "female"
    });
  }

  onChangeMusicRock(e){
    e.preventDefault();
    this.setState({
      music: "rock"
    });
  }

  onChangeMusicJazz(e){
    e.preventDefault();
    this.setState({
      music: "jazz"
    });
  }

  onChangeMusicRap(e){
    e.preventDefault();
    this.setState({
      music: "rap"
    });
  }

  onChangeMusicClassical(e){
    e.preventDefault();
    this.setState({
      music: "classical"
    });
  }

  onChangeSportYoga(e){
    e.preventDefault();
    this.setState({
      sport: "yoga"
    });
  }

  onChangeSportRugby(e){
    e.preventDefault();
    this.setState({
      sport: "rugby"
    });
  }

  onChangeSportTennis(e){
    e.preventDefault();
    this.setState({
      sport: "tennis"
    });
  }

  onChangeSport3Period(e){
    e.preventDefault();
    this.setState({
      sport: "3Period"
    });
  }

  onChangeSportCycling(e){
    e.preventDefault();
    this.setState({
      sport: "cycling"
    });
  }

  onChangeSportFootball(e){
    e.preventDefault();
    this.setState({
      sport: "football"
    });
  }

  submitQuestions(e){
    e.preventDefault();
    const birthdate = ReactDOM.findDOMNode(this.refs.birthDate).value.trim();
    const depdate = ReactDOM.findDOMNode(this.refs.depDate).value.trim();
    const retdate = ReactDOM.findDOMNode(this.refs.retDate).value.trim();
    console.log(this.state.group, birthdate, this.state.gender, this.state.music, this.state.sport)
    //window.location = '/circuits';
  }

  render(){

    let selectedAlone = (this.state.group=="alone") ? "selectedGroup" : "notSelectedGroup";
    let selectedCouple = (this.state.group=="couple") ? "selectedGroup" : "notSelectedGroup";
    let selectedFamily = (this.state.group=="family") ? "selectedGroup" : "notSelectedGroup";
    let selectedFriends = (this.state.group=="friends") ? "selectedGroup" : "notSelectedGroup";
    let selectedMale = (this.state.gender=="male") ? "selectedGender" : "notSelectedGender";
    let selectedFemale = (this.state.gender=="female") ? "selectedGender" : "notSelectedGender";
    let selectedRock = (this.state.music=="rock") ? "selectedMusic" : "notSelectedMusic";
    let selectedClassical = (this.state.music=="classical") ? "selectedMusic" : "notSelectedMusic";
    let selectedRap = (this.state.music=="rap") ? "selectedMusic" : "notSelectedMusic";
    let selectedJazz = (this.state.music=="jazz") ? "selectedMusic" : "notSelectedMusic";
    let selectedFootball = (this.state.sport=="football") ? "selectedSport" : "notSelectedSport";
    let selectedYoga = (this.state.sport=="yoga") ? "selectedSport" : "notSelectedSport";
    let selectedCycling = (this.state.sport=="cycling") ? "selectedSport" : "notSelectedSport";
    let selectedRugby = (this.state.sport=="rugby") ? "selectedSport" : "notSelectedSport";
    let selectedTennis = (this.state.sport=="tennis") ? "selectedSport" : "notSelectedSport";
    let selected3Period = (this.state.sport=="3Period") ? "selectedSport" : "notSelectedSport";

    return (
      <div className="container">
        <NavBarHome />
        <main>
          <TextQuestions />
          <form className="questions-form" onSubmit={this.submitQuestions.bind(this)}>
            <center>
              <input
                type="text"
                ref="goingTo"
                className="form-control questions-text"
                placeholder="Where do you want to go?"
                aria-label="GoingTo"
                aria-describedby="basic-addon2"
              /><br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text questions-text" id="basic-addon3">Departure date:</span>
                </div>
                <input
                  type="date"
                  ref="depDate"
                  className="form-control questions-text"
                  placeholder="Departure Date"
                  aria-label="Departure Date"
                  aria-describedby="basic-addon3"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text questions-text" id="basic-addon4">Return date:</span>
                </div>
                <input
                  type="date"
                  ref="retDate"
                  className="form-control questions-text"
                  placeholder="Return Date"
                  aria-label="Return Date"
                  aria-describedby="basic-addon4"
                />
              </div><br/><br/>
              <h5 className="questions-text">You will travel:</h5><br/>
              <span>
                  <label className="questions-text">Alone</label>
                  <label className="questions-text">In couple</label>
                  <label className="questions-text">With the family</label>
                  <label className="questions-text">With friends</label><br/>
                  <label className={selectedAlone} onClick={this.onChangeGroupAlone}><img className="musicIcon" src="/Questions/002-boy.png"/></label>
                  <label className={selectedCouple} onClick={this.onChangeGroupCouple}><img className="musicIcon" src="/Questions/003-parents.png"/></label>
                  <label className={selectedFamily} onClick={this.onChangeGroupFamily}><img className="musicIcon" src="/Questions/001-family.png"/></label>
                  <label className={selectedFriends} onClick={this.onChangeGroupFriends}><img className="musicIcon" src="/Questions/004-friendship.png"/></label>
              </span><br/><br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text questions-text" id="basic-addon1">Birth date:</span>
                </div>
                <input
                  type="date"
                  ref="birthDate"
                  className="form-control questions-text"
                  placeholder="Birth Date"
                  aria-label="Birth Date"
                  aria-describedby="basic-addon1"
                />
              </div>
              <h5 className="questions-text">You are:</h5><br/>
              <span className="male-female">
                  <label className={selectedMale} onClick={this.onChangeGenderMale}><FontAwesome className="male-female" name='male' size='5x' /></label>
                  <label className={selectedFemale} onClick={this.onChangeGenderFemale}><FontAwesome className="male-female" name='female' size='5x' /></label>
              </span><br/><br/>
              <h5 className="questions-text">What about music?</h5><br/>
              <span>
                  <label className="questions-text">Rock</label>
                  <label className="questions-text">Classical</label>
                  <label className="questions-text">Rap</label>
                  <label className="questions-text">Jazz</label><br/>
                  <label className={selectedRock} onClick={this.onChangeMusicRock}><img className="musicIcon" src="/Questions/004-guitar.png"/></label>
                  <label className={selectedClassical} onClick={this.onChangeMusicClassical}><img className="musicIcon" src="/Questions/002-viola.png"/></label>
                  <label className={selectedRap} onClick={this.onChangeMusicRap}><img className="musicIcon" src="/Questions/003-rap.png"/></label>
                  <label className={selectedJazz} onClick={this.onChangeMusicJazz}><img className="musicIcon" src="/Questions/001-trumpet.png"/></label>
              </span><br/><br/>
              <h5 className="questions-text">And sports?</h5><br/>
              <span>
                  <label className="questions-text">Football</label>
                  <label className="questions-text">Yoga</label>
                  <label className="questions-text">Cycling</label>
                  <label className="questions-text">Rugby</label><br/>
                  <label className={selectedFootball} onClick={this.onChangeSportFootball}><img className="musicIcon" src="/Questions/006-soccer.png"/></label>
                  <label className={selectedYoga} onClick={this.onChangeSportYoga}><img className="musicIcon" src="/Questions/001-yoga.png"/></label>
                  <label className={selectedCycling} onClick={this.onChangeSportCycling}><img className="musicIcon" src="/Questions/005-bike.png"/></label>
                  <label className={selectedRugby} onClick={this.onChangeSportRugby}><img className="musicIcon" src="/Questions/003-rugby.png"/></label>
                  <label className="questions-text">Tennis</label>
                  <label className="questions-text">3rd Period</label><br/>
                  <label className={selectedTennis} onClick={this.onChangeSportTennis}><img className="musicIcon" src="/Questions/004-tennis.png"/></label>
                  <label className={selected3Period} onClick={this.onChangeSport3Period}><img className="musicIcon" src="/Questions/002-beer.png"/></label>
              </span><br/><br/>
              <button type='submit' className="button-next">Next</button>
            </center>
          </form>
        </main>
      </div>
    );
  }
}


class TextQuestions extends Component{
  render(){
    return(
      <div className="Were-going-to-ask-y">
        We’re going to ask you a few questions to suggest circuits that match your personality and your needs. Your information is safe with us, you can delete it anytime.
      </div>
    )
  }
}

class PersonalQuestions extends Component{
  render(){
    return(
      <div className="pers-questions-form">
        <div className="input-group center">
          Do you feel more like ?
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" aria-label="hp" id="inlineRadio31" value="hp" name="gridRadios3"/>
              <label className="form-check-label" for="inlineRadio31">Harry Potter</label><br/>
              <input type="radio" aria-label="yoda" id="inlineRadio32" value="yoda" name="gridRadios3"/>
              <label className="form-check-label" for="inlineRadio32">Maître Yoda</label><br/>
              <input type="radio" aria-label="leonardo" id="inlineRadio33" value="leonardo" name="gridRadios3"/>
              <label className="form-check-label" for="inlineRadio33">Leonardo Di Caprio</label><br/>
              <input type="radio" aria-label="cindarella" id="inlineRadio34" value="cindarella" name="gridRadios3"/>
              <label className="form-check-label" for="inlineRadio34">Cindarella</label><br/>
              <input type="radio" aria-label="snow" id="inlineRadio35" value="snow" name="gridRadios3"/>
              <label className="form-check-label" for="inlineRadio35">Jon Snow</label><br/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
