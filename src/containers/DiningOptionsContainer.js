import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from '../components/MapComponent.js'
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
    getMiles(i) {
     return i*0.000621371192;
    }

    displayRestaurants(){
      if (this.props.restaurantsList.restaurantsList){
      return this.props.restaurantsList.restaurantsList.map( (rest) => {
          return(<div>{rest.name} | {rest.location.address[0]} | {rest.location.neighborhoods[0]} | {rest.categories[0][0]} | {this.getMiles(rest.distance).toString().match(/.*\..{0,2}|.*/)[0]} miles from venue</div>)
        })
      }
    }



  render(){
        return (
          <div>
                <h1>Restaurant's in the Area</h1>
                {this.displayRestaurants()}
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
