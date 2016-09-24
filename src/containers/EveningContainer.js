import React, { Component } from 'react'
import { connect } from 'react-redux'

const Evening = class extends Component {



  render(){
        return (
          <div>
                <h1>Your Evening Itinerary</h1>
                <div>Dinner: {this.props.selectedRestaurant.selectedRestaurant.name} </div>
                <div>Event: {this.props.selectedEvent.selectedEvent.title} </div>
                <div>Drinks: {this.props.selectedBar.selectedBar.name} </div>
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
