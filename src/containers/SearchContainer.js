import React, { Component } from 'react';
import EventListContainer from './EventListContainer.js'
import SearchForm from '../components/SearchForm.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export default class SearchContainer extends Component {



  render() {
    return (
      <div>
          <center><h1>What Should I Do Tonight?</h1></center>
          <MuiThemeProvider >
          <SearchForm />
          </MuiThemeProvider>
          <br />
          <br />

          <EventListContainer />

        </div>
    );
  }
}
