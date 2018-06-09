import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper';

export default class NavBarHome extends Component {

  render(){
    return (
      <div className="container navbar-signup">
          <div className="NAME">AiChill</div>
          <a href='/administration' className="Help">Administration</a>
          <a href='/help' className="Help">Help</a>
          <AccountsUIWrapper /><br/>
      </div>
    )
  }
}
