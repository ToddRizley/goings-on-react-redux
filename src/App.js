import React, { Component } from 'react';
import EventListContainer from './containers/EventListContainer.js'
import BarOptionsContainer from './containers/BarOptionsContainer.js'
import DiningOptionsContainer from './containers/DiningOptionsContainer.js'
import SearchContainer from './containers/SearchContainer.js'
import EveningContainer from './containers/EventListContainer.js'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export default class AppContainer extends Component {



  render() {
    return (
      <div>
          <MuiThemeProvider >
            <SearchContainer />
            <EventListContainer />
            <DiningOptionsContainer />
            <BarOptionsContainer />
            <EveningContainer />
          </MuiThemeProvider>

        </div>
    );
  }
}
