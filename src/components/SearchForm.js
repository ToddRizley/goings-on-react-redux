import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchConcerts from '../actions/fetchConcerts.js'


const Form = class extends Component {

  handleFormSubmit(event){
    event.preventDefault()
    var city = document.getElementById("city").value
    var date = document.getElementById("date").value
    this.props.fetchConcerts(city, date)
  }







  render(){
        return (
        <div>
          <center>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <label>City</label>
                <input type="text" className="entry-input" id="city"/>
                <label>Date</label>
                <input type="date" className="entry-input" id="date"/>
                <button type="submit">Submit</button>
            </form>
          </center>
        </div>
        );
      }
    }
const SearchForm = connect(null, mapDispatchToProps)(Form)

    function mapDispatchToProps(dispatch) {
      return  bindActionCreators({fetchConcerts}, dispatch)
    }
export default SearchForm;
