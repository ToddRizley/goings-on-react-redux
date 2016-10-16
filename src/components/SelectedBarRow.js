import React, { Component } from 'react'


export default class SelectedBarRow extends Component {


  render(){

    return(
    <div className="result-row">
      Drinks:
      <strong><a href={this.props.selectedBar.selectedBar.url} target="_blank">
        { this.props.selectedBar.selectedBar.name }
      </a></strong> |
        { " " + this.props.selectedBar.selectedBar.location.address[0] }
    </div>
    )
  }
}
