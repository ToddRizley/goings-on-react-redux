import React from 'react'
import { Route } from 'react-router'
// import AppContainer from './App'
import SearchContainer from './containers/SearchContainer'
import DiningOptionsContainer from './containers/DiningOptionsContainer'
import BarOptionsContainer from './containers/BarOptionsContainer'
import EventListContainer from './containers/EventListContainer'
import EveningContainer from './containers/EveningContainer'




export default (
  <Route>
    <Route path="/" component={SearchContainer} />
    <Route path="/events" component={EventListContainer} />
    <Route path="/event/diningpoptions" component={DiningOptionsContainer} />
    <Route path="event/baroptions" component={BarOptionsContainer} />
    <Route path="/evening_results" component={EveningContainer} />
  </Route>
  );
