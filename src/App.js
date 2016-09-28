import React, { Component } from 'react';
import EventListContainer from './containers/EventListContainer.js'
import BarOptionsContainer from './containers/BarOptionsContainer.js'
import DiningOptionsContainer from './containers/DiningOptionsContainer.js'
import SearchContainer from './containers/SearchContainer.js'
import EveningContainer from './containers/EventListContainer.js'
import './App.css';


export default class AppContainer extends Component {



  render() {
    return (
      <div>

            <SearchContainer />
            <EventListContainer />
            <DiningOptionsContainer />
            <BarOptionsContainer />
            <EveningContainer />
        </div>
    );
  }
}
