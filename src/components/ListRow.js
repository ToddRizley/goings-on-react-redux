import React, { Component } from 'react'
import { Router, Link, Route } from 'react-router'

const ListRow = class extends Component {
  handleClick() {
    event.preventDefault()
    debugger
    this.props.updateSelectedEvent
  }

  render(){
        return (
          <div>
            <button onClick={this.handleClick.bind(this)}><Link to={"/event/diningpoptions"}>Select Event</Link></button><strong><a href={this.props.concertData.url} target="_blank">{this.props.concertData.title}</a></strong> | {this.props.concertData.venue.name} | {this.props.concertData.taxonomies[0].name}
          </div>

        );
      }
    }

export default ListRow;
