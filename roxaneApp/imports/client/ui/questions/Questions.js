import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

import NavBarHome from "../NavBarHome";
import 'react-input-range/lib/css/index.css';

export default class Questions extends Component {
  constructor(){
    super();
    this.state={
      group : "",
      travel: "",
      car : false,
      gender : "",
      music : "",
      sport: "",
      value: 5
    }
    this.onChangeGroupAlone = this.onChangeGroupAlone.bind(this);
    this.onChangeGroupCouple = this.onChangeGroupCouple.bind(this);
    this.onChangeGroupFamily = this.onChangeGroupFamily.bind(this);
    this.onChangeGroupFriends = this.onChangeGroupFriends.bind(this);
    this.onChangeTravelBeach = this.onChangeTravelBeach.bind(this);
    this.onChangeTravelSports = this.onChangeTravelSports.bind(this);
    this.onChangeTravelCulture = this.onChangeTravelCulture.bind(this);
    this.onChangeTravelOutdoors = this.onChangeTravelOutdoors.bind(this);
    this.onChangeTravelHistory = this.onChangeTravelHistory.bind(this);
    this.onChangeCarYes = this.onChangeCarYes.bind(this);
    this.onChangeCarNo = this.onChangeCarNo.bind(this);
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

  onChangeTravelBeach(e){
    e.preventDefault();
    this.setState({
      travel: "beach"
    });
  }

  onChangeTravelSports(e){
    e.preventDefault();
    this.setState({
      travel: "sports"
    });
  }

  onChangeTravelHistory(e){
    e.preventDefault();
    this.setState({
      travel: "history"
    });
  }

  onChangeTravelCulture(e){
    e.preventDefault();
    this.setState({
      travel: "culture"
    });
  }

  onChangeTravelOutdoors(e){
    e.preventDefault();
    this.setState({
      travel: "outdoors"
    });
  }

  onChangeCarYes(e){
    e.preventDefault();
    this.setState({
      car: true
    });
  }

  onChangeCarNo(e){
    e.preventDefault();
    this.setState({
      car: false
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
    let selectedBeach = (this.state.travel=="beach") ? "selectedTravel" : "notSelectedTravel";
    let selectedOutdoors = (this.state.travel=="outdoors") ? "selectedTravel" : "notSelectedTravel";
    let selectedHistory = (this.state.travel=="history") ? "selectedTravel" : "notSelectedTravel";
    let selectedSports = (this.state.travel=="sports") ? "selectedTravel" : "notSelectedTravel";
    let selectedCulture = (this.state.travel=="culture") ? "selectedTravel" : "notSelectedTravel";
    let selectedCar = this.state.car ? "selectedCar" : "notSelectedCar";
    let selectedNoCar = this.state.car ? "notSelectedCar" : "selectedCar";
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
              <h5 className="questions-text">You will travel:</h5>
              <div className="card-deck mt-4">
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedAlone}>
                    <label className="questions-text">Alone</label><br/>
                    <label onClick={this.onChangeGroupAlone}><img src="/Questions/002-boy.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedCouple}>
                    <label className="questions-text">In couple</label><br/>
                    <label onClick={this.onChangeGroupCouple}><img src="/Questions/003-parents.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedFamily}>
                    <label className="questions-text">With the family</label><br/>
                    <label onClick={this.onChangeGroupFamily}><img src="/Questions/001-family.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedFriends}>
                    <label className="questions-text">With friends</label><br/>
                    <label onClick={this.onChangeGroupFriends}><img src="/Questions/004-friendship.png"/></label>
                  </div>
                </div>
              </div><br/><br/>
              <h5 className="questions-text">How many are you ?</h5>
              <input
                type="number"
                ref="nbAdults"
                className="form-control questions-text"
                placeholder="Adults"
                aria-label="nbAdults"
              /><br/>
              <input
                type="number"
                ref="nbChildren"
                className="form-control questions-text"
                placeholder="Children (under 18)"
                aria-label="nbChildren"
              /><br/>
              <h5 className="questions-text">For your holidays, you absolutely need:</h5>
              <div className="card-deck mt-4">
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedBeach}>
                    <label className="questions-text">Beach</label><br/>
                    <label onClick={this.onChangeTravelBeach}><img className="musicIcon" src="/Questions/004-beach.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedOutdoors}>
                    <label className="questions-text">Outdoors</label><br/>
                    <label onClick={this.onChangeTravelOutdoors}><img className="musicIcon" src="/Questions/005-mountain.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedHistory}>
                    <label className="questions-text">History</label><br/>
                    <label onClick={this.onChangeTravelHistory}><img className="musicIcon" src="/Questions/002-column.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedSports}>
                    <label className="questions-text">Sports</label><br/>
                    <label onClick={this.onChangeTravelSports}><img className="musicIcon" src="/Questions/001-trekking.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedCulture}>
                    <label className="questions-text">Meeting a culture</label><br/>
                    <label onClick={this.onChangeTravelCulture}><img className="musicIcon" src="/Questions/003-buddha.png"/></label>
                  </div>
                </div>
              </div><br/>
              <h5 className="questions-text">About transportation</h5>
              <div className="card-deck mt-4">
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedCar}>
                    <label className="questions-text">I will rent a car</label><br/>
                    <label onClick={this.onChangeCarYes}><FontAwesome className="male-female" name='car' size='5x' /></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedNoCar}>
                    <label className="questions-text">I can take care of myself</label><br/>
                    <label onClick={this.onChangeCarNo}><FontAwesome className="male-female" name='bus' size='5x' /></label>
                  </div>
                </div>
              </div><br/>
              <h5 className="questions-text">From 1=Low Budget to 10=Extremely Expensive, where do you want to be ?</h5><br/>
              <InputRange
                maxValue={10}
                minValue={0}
                className="slider"
                value={this.state.value}
                onChange={value => this.setState({ value })}
              />
              <br/><br/><br/>
              <h5 className="questions-text">We also need to ask you a few personal questions in order to find out the best trip for you!</h5><br/><br/>
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
              </div><br/>
              <h5 className="questions-text">You are:</h5>
              <div className="card-deck mt-4">
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedMale}>
                    <label className="questions-text">Man</label><br/>
                    <label onClick={this.onChangeGenderMale}><FontAwesome className="male-female" name='male' size='5x' /></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedFemale}>
                    <label className="questions-text">Woman</label><br/>
                    <label onClick={this.onChangeGenderFemale}><FontAwesome className="male-female" name='female' size='5x' /></label>
                  </div>
                </div>
              </div><br/>
              <h5 className="questions-text">What about music?</h5>
              <div className="card-deck mt-4">
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedRock}>
                    <label className="questions-text">Rock</label><br/>
                    <label onClick={this.onChangeMusicRock}><img className="musicIcon" src="/Questions/004-guitar.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedClassical}>
                    <label className="questions-text">Classical</label><br/>
                    <label onClick={this.onChangeMusicClassical}><img className="musicIcon" src="/Questions/002-viola.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedRap}>
                    <label className="questions-text">Rap</label><br/>
                    <label onClick={this.onChangeMusicRap}><img className="musicIcon" src="/Questions/003-rap.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedJazz}>
                    <label className="questions-text">Jazz</label><br/>
                    <label onClick={this.onChangeMusicJazz}><img className="musicIcon" src="/Questions/001-trumpet.png"/></label>
                  </div>
                </div>
              </div><br/>
              <h5 className="questions-text">And sports?</h5>
              <div className="card-deck mt-4">
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedFootball}>
                    <label className="questions-text">Football</label><br/>
                    <label onClick={this.onChangeSportFootball}><img className="musicIcon" src="/Questions/006-soccer.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedYoga}>
                    <label className="questions-text">Yoga</label><br/>
                    <label onClick={this.onChangeSportYoga}><img className="musicIcon" src="/Questions/001-yoga.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedCycling}>
                    <label className="questions-text">Cycling</label><br/>
                    <label onClick={this.onChangeSportCycling}><img className="musicIcon" src="/Questions/005-bike.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedRugby}>
                    <label className="questions-text">Rugby</label><br/>
                    <label onClick={this.onChangeSportRugby}><img className="musicIcon" src="/Questions/003-rugby.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selectedTennis}>
                    <label className="questions-text">Tennis</label>
                    <label onClick={this.onChangeSportTennis}><img className="musicIcon" src="/Questions/004-tennis.png"/></label>
                  </div>
                </div>
                <div className="card bg-white border-light musicIcon">
                  <div className = {selected3Period}>
                    <label className="questions-text">3rd Period</label><br/>
                    <label onClick={this.onChangeSport3Period}><img className="musicIcon" src="/Questions/002-beer.png"/></label>
                  </div>
                </div>
              </div>
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
