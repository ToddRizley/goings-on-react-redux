import React, { Component } from 'react'
import { connect } from 'react-redux'


const List = class extends Component {


displayList () {
      if (this.props.concertList.concertList) {
        return this.props.concertList.concertList.map( (con) =>

        <div><strong><a href={con.url} target="_blank">{con.title}</a></strong> | {con.venue.name} | {con.taxonomies[0].name} </div> )
      }
}





  render(){
        return (
          <div>
              <ul>
                {this.displayList()}
              </ul>
          </div>

        );
      }
    }
const ListContainer = connect(mapStateToProps, null)(List)

  function mapStateToProps(state) {
    return {concertList: state.concertList}
  }

export default ListContainer;
