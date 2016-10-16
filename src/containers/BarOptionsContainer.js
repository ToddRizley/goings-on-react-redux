import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import addBarOptions from '../actions/addBarOptions'
import BarOptionRow from '../components/BarOptionRow'

const BarOptions = class extends Component {

  componentWillMount() {
    var type = "bar"
    var lat = this.props.selectedEvent.selectedEvent.venue.location.lat
    var long = this.props.selectedEvent.selectedEvent.venue.location.lon
    var radius = 3000
    var limit = 10
      axios.get(`http://localhost:3006/yelpResults/${type}/${lat}/${long}/${radius}/${limit}`)
      .then(response => {
        var bars = response.data.businesses
        this.props.addBarOptions(bars)
      })
    }


    displayBars(){
      if (this.props.barsList.barsList){
      return this.props.barsList.barsList.map( (bar) =>
              <div><BarOptionRow barData={bar} /></div>
            )
      }
    }



  render(){
        return (
          <div>
                <h1>Bars in the Area</h1>
                <div> {this.displayBars()} </div>
          </div>

        );
      }
    }

const BarOptionsContainer = connect(mapStateToProps, mapDispatchToProps)(BarOptions)

  function mapStateToProps(state) {
    return {selectedEvent: state.selectedEvent, barsList: state.barsList }
  }
  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({addBarOptions}, dispatch)
  }

export default BarOptionsContainer;
