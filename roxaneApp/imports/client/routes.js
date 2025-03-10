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
import Questions from './ui/questions/Questions';
import CircuitSelection from './ui/circuit/CircuitSelection';
import Trip from './ui/trip/Trip';
import NotFoundPage from './ui/NotFoundPage';
import AdministrationHome from './ui/administration/administrationHome'
import InterestZonesList from './ui/administration/interestZones/InterestZones';
import Users from './ui/administration/users/Users';
import StopsList from './ui/administration/stops/StopsList';
import ContinentsList from './ui/administration/fixedData/Continents';
import CountriesList from './ui/administration/fixedData/Countries';
import RegionsList from './ui/administration/fixedData/Regions';
import InterestPointsList from './ui/administration/interestPoints/InterestPointsList';
import CircuitsList from './ui/administration/circuits/CircuitsList';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path='/questions' component={Questions}/>
      <Route exact path='/circuits' component={CircuitSelection} />
      <Route exact path='/trip' component={Trip}/>
      <Route exact path='/administration' component={AdministrationHome}/>
      <Route exact path='/administration/interestZones' component={InterestZonesList}/>
      <Route exact path='/administration/users' component={Users} />
      <Route exact path='/administration/stops' component={StopsList} />
      <Route exact path='/administration/continents' component={ContinentsList} />
      <Route exact path='/administration/countries' component={CountriesList} />
      <Route exact path='/administration/regions' component={RegionsList} />
      <Route exact path='/administration/interestPoints' component={InterestPointsList} />
      <Route exact path='/administration/circuits' component={CircuitsList} />
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
