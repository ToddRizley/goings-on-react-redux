import React, { Component } from 'react'
import { Link } from 'react-router'
import updateSelectedEvent from '../actions/updateSelectedEvent.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EventRow = class extends Component {

  handleClick() {
    event.preventDefault()
    var selectedEvent = this.props.concertData
    this.props.updateSelectedEvent(selectedEvent)
  }

  displayEventRow(){
    return (
      <tr>
        <td><button className="button" onClick={this.handleClick.bind(this)}>
        <Link to={"/event/diningpoptions"}>Select Event</Link></button></td>
        <td className="title-name"><strong><a href={this.props.concertData.url} target="_blank">{this.props.concertData.title}</a></strong></td>
        <td>| {this.props.concertData.venue.name} |</td>
        <td><i>{this.props.concertData.taxonomies[0].name}</i></td>
      </tr>

    );

  }

  render(){
        return (
          <tr>
            { this.displayEventRow() }
          </tr>

        );
      }
    }

const EventListRow = connect(null, mapDispatchToProps)(EventRow)

  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({updateSelectedEvent}, dispatch)
  }
export default EventListRow;
