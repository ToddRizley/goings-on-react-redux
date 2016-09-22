import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from '../components/MapComponent.js'


const DiningOptions = class extends Component {



  render(){
        return (
          <div>
                <h1>Hello World!</h1>
                <Map />
          </div>

        );
      }
    }

const DiningOptionsContainer = connect(mapStateToProps, null)(DiningOptions)

  function mapStateToProps(state) {
    return {selectedEvent: state.selectedEvent}
  }

export default DiningOptionsContainer;
