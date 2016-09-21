import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListRow from '../components/ListRow.js'


const List = class extends Component {


displayList () {
      if (this.props.concertList.concertList) {
        return this.props.concertList.concertList.map( (con) =>
          <div><ListRow concertData={con} /></div>
      )}
}


  render(){
        return (
          <div>
                {this.displayList()}
          </div>

        );
      }
    }
const ListContainer = connect(mapStateToProps, null)(List)

  function mapStateToProps(state) {
    return {concertList: state.concertList}
  }

export default ListContainer;
