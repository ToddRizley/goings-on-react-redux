import React, { Component } from 'react';
import EventListContainer from './EventListContainer.js'
import SearchForm from '../components/SearchForm.js'


export default class SearchContainer extends Component {



  render() {
    return (
      <div>
          <center><h1>What Should I Do Tonight?</h1></center>

          <SearchForm />

          <br />
          <br />

          <EventListContainer />

        </div>
    );
  }
}
