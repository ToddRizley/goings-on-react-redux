import React, { Component } from 'react'


export default class SelectedRestaurantRow extends Component {


  render(){

    return(
    <div className="result-row">
      Dinner:
      <strong><a href={this.props.selectedRestaurant.selectedRestaurant.url} target="_blank">
        { " " +  this.props.selectedRestaurant.selectedRestaurant.name }
      </a></strong> |
        { " " + this.props.selectedRestaurant.selectedRestaurant.location.address[0] + "  " }
    </div>
    )
  }
}
