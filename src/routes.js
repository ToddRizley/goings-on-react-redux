import React from 'react'
import { Route } from 'react-router'
import AppContainer from './App'
import DiningOptionsContainer from './containers/DiningOptionsContainer'
import BarOptionsContainer from './containers/BarOptionsContainer'
import EventListContainer from './containers/EventListContainer'



export default (
  <Route>
    <Route path="/" component={AppContainer} />
    <Route path="/events" component={EventListContainer} />
    <Route path="/event/diningpoptions" component={DiningOptionsContainer} />
    <Route path="event/baroptions" component={BarOptionsContainer} />
  </Route>
  );
