import React from 'react';
import {
  Router,
  Route,
  Switch,
  IndexRoute
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './ui/App';
import Welcome from './ui/welcomePages/Welcome';
import Questions from './ui/questions/Questions'
import NotFoundPage from './ui/NotFoundPage';
import AdministrationHome from './ui/administration/administrationHome'
import InterestZonesList from './ui/administration/interestZones/InterestZones';
import Users from './ui/administration/users/Users';
import StopsList from './ui/administration/stops/StopsList'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path='/1' component={Questions}/>
      <Route exact path='/administration' component={AdministrationHome}/>
      <Route exact path='/administration/interestZones' component={InterestZonesList}/>
      <Route exact path='/administration/users' component={Users} />
      <Route exact path='/administration/stops' component={StopsList} />
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
