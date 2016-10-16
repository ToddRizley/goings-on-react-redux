import React, { Component } from 'react'


export default class SelectedEventRow extends Component {


  render(){

    return(
      <div className="result-row">
        Event:
        <strong><a href={this.props.selectedEvent.selectedEvent.url} target="_blank">
          { " " + this.props.selectedEvent.selectedEvent.title}
        </a></strong> |
          { " " + this.props.selectedEvent.selectedEvent.venue.name }
      </div>
    )
  }
}
