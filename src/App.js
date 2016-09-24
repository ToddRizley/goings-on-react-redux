import React, { Component } from 'react';
import EventListContainer from './containers/EventListContainer.js'
import SearchForm from './components/SearchForm.js'
import './App.css';

export default class AppContainer extends Component {


  render() {
    return (
      <div>
        <center><h1>What Should I Do Tonight?</h1></center>
        <SearchForm />
        <EventListContainer />

        {/* <Map/> */}
        </div>
    );
  }
}
