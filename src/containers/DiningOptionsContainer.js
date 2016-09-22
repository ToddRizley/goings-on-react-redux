import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from '../components/MapComponent.js'
import axios from 'axios'

const DiningOptions = class extends Component {

  componentWillMount() {
    debugger
    var type = "restaurant"
    var lat = this.props.selectedEvent.selectedEvent.venue.location.lat
    var long = this.props.selectedEvent.selectedEvent.venue.location.lon
    var radius = 3000
    var limit = 10
      axios.get(`http://localhost:3006/yelpResults/${type}/${lat}/${long}/${radius}/${limit}`)
      .then(response => {
        console.log("hello world")
        debugger
      // var vendors = response.data.businesses
      //   this.props.addVendors({vendors, handleClick: this.handleClick.bind(this)})
      })
    }

    displayEvent(){

    }


  render(){
        return (
          <div>
                <h1>Hello World!</h1>
                {/* <Map /> */}
          </div>

        );
      }
    }

const DiningOptionsContainer = connect(mapStateToProps, null)(DiningOptions)

  function mapStateToProps(state) {
    return {selectedEvent: state.selectedEvent}
  }

export default DiningOptionsContainer;
