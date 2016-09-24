import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapComponent from '../components/MapComponent'
const Evening = class extends Component {




  render(){
        return (
          <div>
                <h1>Your Evening Itinerary</h1>
                <div>Dinner: {this.props.selectedRestaurant.selectedRestaurant.name} </div>
                <div>Event: {this.props.selectedEvent.selectedEvent.title} </div>
                <div>Drinks: {this.props.selectedBar.selectedBar.name} </div>
                <div><MapComponent barCoords={this.props.selectedBar.selectedBar.location.coordinate}
                  eventCoords={this.props.selectedEvent.selectedEvent.venue.location}
                  restCoords={this.props.selectedRestaurant.selectedRestaurant.location.coordinate}/></div>

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
