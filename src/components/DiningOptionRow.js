import React, { Component } from 'react'
import { Link } from 'react-router'
import updateSelectedRestaurant from '../actions/updateSelectedRestaurant.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const DiningOption = class extends Component {

handleClick() {
    event.preventDefault()
    var selectedRestaurant = this.props.restaurantData
    this.props.updateSelectedRestaurant(selectedRestaurant)
  }

  getMiles(i) {
   return i*0.000621371192;
  }

  render(){
        return (
          <div><button className="button" onClick={this.handleClick.bind(this)}><Link to={"/event/baroptions"}>Select Restuarant</Link></button>
          <strong><a href={this.props.restaurantData.url} target="_blank">{ this.props.restaurantData.name }</a></strong> |
            { " " + this.props.restaurantData.location.address[0] } |
                { " " + this.props.restaurantData.location.neighborhoods[0] } |
                { " " + this.props.restaurantData.categories[0][0] } |
                { " " + this.getMiles(this.props.restaurantData.distance).toString().match(/.*\..{0,2}|.*/)[0] }
               {" "} miles from venue</div>

        );
      }
    }

const DiningOptionRow = connect(null, mapDispatchToProps)(DiningOption)

  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({updateSelectedRestaurant}, dispatch)
  }
export default DiningOptionRow;
