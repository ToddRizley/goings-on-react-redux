import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchConcerts from '../actions/fetchConcerts.js'


const Form = class extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleFormSubmit(event){
    event.preventDefault()
    var city = document.getElementById("city").value
    var date = document.getElementById("date").value

    if (this.invalidDate(date)) {
      this.handleOpen()
    } else {
    this.props.fetchConcerts(city, date)
    }
  }

  invalidDate(date){
    var today = new Date();
    var dateEdit = new Date(date)
    console.log(dateEdit <= today)
    if (dateEdit <= today ){
      return true
    } else {
      return false
    }
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
