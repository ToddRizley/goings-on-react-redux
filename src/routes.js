import React from 'react'
import { Route } from 'react-router'
import AppContainer from './App'
import DiningOptionsContainer from './containers/DiningOptionsContainer.js'




export default (
  <Route>
    <Route path="/" component={AppContainer} />
    <Route path="/event/diningpoptions" component={DiningOptionsContainer} />
  </Route>
  );
