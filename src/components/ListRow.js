import React, { Component } from 'react'
import { Link } from 'react-router'
import updateSelectedEvent from '../actions/updateSelectedEvent.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Row = class extends Component {

  handleClick() {
    event.preventDefault()
    var selectedEvent = this.props.concertData
    this.props.updateSelectedEvent(selectedEvent)
  }

  render(){
        return (
          <div>
            <button onClick={this.handleClick.bind(this)}><Link to={"/event/diningpoptions"}>Select Event</Link></button><strong><a href={this.props.concertData.url} target="_blank">{this.props.concertData.title}</a></strong> | {this.props.concertData.venue.name} | {this.props.concertData.taxonomies[0].name}
          </div>

        );
      }
    }

const ListRow = connect(null, mapDispatchToProps)(Row)

  function mapDispatchToProps(dispatch) {
    return  bindActionCreators({updateSelectedEvent}, dispatch)
  }
export default ListRow;
