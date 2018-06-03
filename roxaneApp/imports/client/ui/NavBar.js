import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper';

export default class NavBar extends Component {

  getToHome(e){
    e.preventDefault();
    window.location='/';
  }

  render(){
    return (
      <div className="main-layout">
        <header>
          <h2><button className='btn btn-invisible' onClick={this.getToHome}>Roxane</button></h2>
          <nav>
            <a href='/administration'>My Trips</a>
            <a href='/administration'>Administration</a>
            <a href='/administration'>About</a>
            <AccountsUIWrapper />
          </nav>
        </header>
      </div>
    )
  }
}
