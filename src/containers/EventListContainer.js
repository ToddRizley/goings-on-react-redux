import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListRow from '../components/EventListRow.js'

const EventList = class extends Component {

displayList () {
      if (this.props.concertList.concertList) {
        return this.props.concertList.concertList.map( (con) =>
            <EventListRow concertData={con} />
      )}
    }

  render(){
        return (
          <div>
            <table>
                <tbody>
                  { this.displayList() }
                </tbody>
            </table>
          </div>
        );
      }
    }
const EventListContainer = connect(mapStateToProps, null)(EventList)

  function mapStateToProps(state) {
    return {concertList: state.concertList}
  }

export default EventListContainer;
