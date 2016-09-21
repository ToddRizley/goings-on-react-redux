import React, { Component } from 'react'

const ListRow = class extends Component {


  render(){
        return (
          <div>
            <strong><a href={this.props.concertData.url} target="_blank">{this.props.concertData.title}</a></strong> | {this.props.concertData.venue.name} | {this.props.concertData.taxonomies[0].name}
          </div>

        );
      }
    }

export default ListRow;
