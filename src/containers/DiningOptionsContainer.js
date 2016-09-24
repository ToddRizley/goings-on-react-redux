import React, { Component } from 'react'
import { connect } from 'react-redux'
import DiningOptionRow from '../components/DiningOptionRow'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import addRestaurantOptions from '../actions/addRestaurantOptions'

const DiningOptions = class extends Component {

  componentWillMount() {
    var type = "restaurant"
    var lat = this.props.selectedEvent.selectedEvent.venue.location.lat
    var long = this.props.selectedEvent.selectedEvent.venue.location.lon
    var radius = 3000
    var limit = 10
      axios.get(`http://localhost:3006/yelpResults/${type}/${lat}/${long}/${radius}/${limit}`)
      .then(response => {
        var restaurants = response.data.businesses
        this.props.addRestaurantOptions(restaurants)
      })
    }

    displayRestaurants(){
      if (this.props.restaurantsList.restaurantsList.length){
      return this.props.restaurantsList.restaurantsList.map( (rest) =>
              <div><DiningOptionRow restaurantData={rest} /></div>
        )}
    }

  render(){
        return (
          <div>
                <h1>Restaurants in the Area</h1>
                <div> {this.displayRestaurants()} </div>
          </div>

        );
      }
    }

const DiningOptionsContainer = connect(mapStateToProps, mapDispatchToProps)(DiningOptions)

  function mapStateToProps(state) {
    return {selectedEvent: state.selectedEvent, restaurantsList: state.restaurantsList}
  }
  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({addRestaurantOptions}, dispatch)
  }

export default DiningOptionsContainer;
