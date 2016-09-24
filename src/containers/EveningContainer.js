import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapComponent from '../components/MapComponent'
import SelectedRestaurantRow from '../components/SelectedRestaurantRow'
import SelectedEventRow from '../components/SelectedEventRow'
import SelectedBarRow from '../components/SelectedBarRow'

const Evening = class extends Component {

  render(){
        return (
          <div>
            <h1>Your Evening Itinerary</h1>
              <SelectedRestaurantRow selectedRestaurant={this.props.selectedRestaurant} />
              <SelectedEventRow selectedEvent={this.props.selectedEvent} />
              <SelectedBarRow selectedBar={this.props.selectedBar} />
            <div>
              <MapComponent barCoords={this.props.selectedBar.selectedBar.location.coordinate}
              eventCoords={this.props.selectedEvent.selectedEvent.venue.location}
              restCoords={this.props.selectedRestaurant.selectedRestaurant.location.coordinate}/>
            </div>
          </div>
        );
      }
    }

const EveningContainer = connect(mapStateToProps, null)(Evening)

  function mapStateToProps(state) {
    return {selectedEvent: state.selectedEvent,
      selectedRestaurant: state.selectedRestaurant,
      selectedBar: state.selectedBar
    }
  }

export default EveningContainer;
