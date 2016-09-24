import React, { Component } from 'react'
import { connect } from 'react-redux'
import DiningOptionRow from '../components/DiningOptionRow'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import addRestaurantOptions from '../actions/addRestaurantOptions'

const Evening = class extends Component {



  render(){
        return (
          <div>
                <h1>Your Evening Itinerary</h1>
                <div>Dinner: {this.props.} </div>
                <div>Event: {this.displayRestaurants()} </div>
                <div>Drinks: {this.displayRestaurants()} </div>
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
  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({addRestaurantOptions}, dispatch)
  }

export default EveningContainer;
