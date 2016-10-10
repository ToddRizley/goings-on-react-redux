import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListRow from '../components/EventListRow.js'

const EventList = class extends Component {

displayList () {
      if (this.props.concertList.concertList) {
        return this.props.concertList.concertList.map( (con) =>
          <li className="list-group-item">
            <EventListRow concertData={con} />
        </li>
      )}
    }

  render(){
        return (
          <div>
            <ul className="list-group">
                {this.displayList()}
            </ul>
          </div>


        );
      }
    }
const EventListContainer = connect(mapStateToProps, null)(EventList)

  function mapStateToProps(state) {
    return {concertList: state.concertList}
  }

export default EventListContainer;
