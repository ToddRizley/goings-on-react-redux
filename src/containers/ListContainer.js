import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchConcerts from '../actions/fetchConcerts.js'


const List = class extends Component {


  handleFormSubmit(props){
    event.preventDefault()
    var city = document.getElementById("city").value
    var date = document.getElementById("date").value
    this.props.fetchConcerts(city, date)
  }


  render(){
    debugger
        return (
          <form onSubmit={this.handleFormSubmit.bind(this)}>
              <label>City</label>
              <input type="text" className="entry-input" id="city"/>
              <label>Date</label>
              <input type="date" className="entry-input" id="date"/>
              <button type="submit">Submit</button>
            </form>
        );
      }
    }
const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

  function mapStateToProps(state) {
    return {concertList: state.concertList}
  }

    function mapDispatchToProps(dispatch) {
      return  bindActionCreators({fetchConcerts}, dispatch)
    }
export default ListContainer;
